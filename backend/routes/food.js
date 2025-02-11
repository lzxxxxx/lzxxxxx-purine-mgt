const express = require('express');
const router = express.Router();
const Food = require('../models/Food');
const mongoose = require('mongoose');

// GET /api/foods
router.get('/', async (req, res) => {
  const startTime = Date.now();
  
  try {
    console.log('开始处理请求:', new Date().toISOString());
    
    const connStart = Date.now();
    const connStats = {
      readyState: mongoose.connection.readyState,
      host: mongoose.connection.host
    };
    console.log('连接状态检查耗时:', Date.now() - connStart);

    const { category, riskLevel, search } = req.query;
    let query = {};
    if (category) query.category = category;
    if (riskLevel) query.riskLevel = riskLevel;
    if (search) query.name = { $regex: search, $options: 'i' };

    // 执行查询并记录时间
    const queryStart = Date.now();
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