const express = require('express');
const router = express.Router();
const Food = require('../models/Food');
const mongoose = require('mongoose');

const retryOperation = async (operation, maxRetries = 3) => {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await operation();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      console.log(`操作失败，第 ${i + 1} 次重试...`);
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
};

// GET /api/foods
router.get('/', async (req, res) => {
  const startTime = Date.now();
  
  try {
    console.log('开始处理请求:', new Date().toISOString());
    
    // 添加连接池状态监控
    const topology = mongoose.connection.client.topology;
    const poolStats = topology && topology.s && topology.s.pool;

    if (poolStats) {
      console.log('连接池状态:', {
        当前连接数: poolStats.totalConnectionCount,
        可用连接数: poolStats.availableConnectionCount,
        等待队列: poolStats.waitQueueSize
      });
    } else {
      console.log('无法获取连接池状态');
    }

    const connStart = Date.now();
    const connStats = {
      readyState: mongoose.connection.readyState,
      host: mongoose.connection.host
    };
    console.log('连接状态检查耗时:', Date.now() - connStart);

    const { category, riskLevel, search } = req.query;
    const queryStart = Date.now();

    // 针对无参数查询的优化
    if (!category && !riskLevel && !search) {
      const result = await retryOperation(async () => {
        return await Food.find(
          {},
          { name: 1, category: 1, riskLevel: 1, purineContent: 1, _id: 0 }
        )
        .limit(100)
        .lean()
        .maxTimeMS(5000)  // 5秒超时
        .exec();
      });

      console.log({
        查询类型: '全表查询',
        查询耗时: Date.now() - queryStart,
        总耗时: Date.now() - startTime,
        返回数据量: result.length,
        连接池状态: {
          当前连接数: poolStats ? poolStats.totalConnectionCount : 'unknown',
          可用连接数: poolStats ? poolStats.availableConnectionCount : 'unknown'
        }
      });

      return res.json(result);
    }

    let query = {};
    if (category) query.category = category;
    if (riskLevel) query.riskLevel = riskLevel;
    if (search) query.name = { $regex: search, $options: 'i' };

    const result = await Food.find(query)
      .select('name category riskLevel purineContent')
      .limit(100)
      .lean();

    console.log({
      连接检查耗时: connStart - startTime,
      查询耗时: Date.now() - queryStart,
      总耗时: Date.now() - startTime,
      连接状态: connStats.readyState,
      查询条件: query,
      返回数据量: result.length
    });

    // 获取查询计划
    const explain = await Food.find(query)
      .select('name category riskLevel purineContent')
      .limit(100)
      .lean()
      .explain('allPlansExecution');

    console.log({
      查询计划详情: {
        执行阶段: explain.queryPlanner.winningPlan.stage,
        扫描文档数: explain.executionStats.totalDocsExamined,
        返回文档数: explain.executionStats.nReturned,
        执行时间: explain.executionStats.executionTimeMillis,
        是否使用索引: explain.queryPlanner.winningPlan.inputStage?.indexName
      }
    });

    res.json(result);
  } catch (error) {
    console.error('查询错误:', error);
    res.status(500).json({ message: '获取食物数据失败' });
  }
});

// 搜索食物
router.get('/search', async (req, res) => {
  try {
    const { keyword } = req.query;
    const foods = await Food.find({
      name: { $regex: keyword, $options: 'i' }
    });
    res.json(foods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 添加新食物
router.post('/', async (req, res) => {
  const food = new Food(req.body);
  try {
    const newFood = await food.save();
    res.status(201).json(newFood);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// 添加一个新的路由来检查数据库状态
router.get('/db-status', async (req, res) => {
  try {
    const status = await mongoose.connection.db.admin().serverStatus();
    const stats = await mongoose.connection.db.stats();
    
    res.json({
      connections: status.connections,
      network: status.network,
      opcounters: status.opcounters,
      dbStats: stats
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 