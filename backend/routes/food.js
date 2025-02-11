const express = require('express');
const router = express.Router();
const Food = require('../models/Food');
const mongoose = require('mongoose');

// GET /api/foods
router.get('/', async (req, res) => {
  const startTime = Date.now();
  let queryStartTime;
  
  try {
    // 添加连接池状态监控
    const poolStats = mongoose.connection.client.topology.s.pool;
    console.log('连接池状态:', {
      总连接数: poolStats.totalConnectionCount,
      可用连接数: poolStats.availableConnectionCount,
      等待队列: poolStats.waitQueueSize,
      最大连接数: poolStats.maxPoolSize
    });

    const { category, riskLevel, search } = req.query;
    let query = {};
    if (category) query.category = category;
    if (riskLevel) query.riskLevel = riskLevel;
    if (search) query.name = { $regex: search, $options: 'i' };

    // 记录查询开始时间
    queryStartTime = Date.now();
    console.log(`准备开始查询，距离请求开始: ${queryStartTime - startTime}ms`);

    const foods = await Food.find(query)
      .select('name category riskLevel purineContent')
      .limit(100)
      .lean()
      .explain('executionStats');  // 添加执行计划分析

    const queryEndTime = Date.now();
    
    console.log({
      查询计划: foods.executionStats,
      查询耗时: queryEndTime - queryStartTime,
      总耗时: queryEndTime - startTime
    });

    // 移除 explain 结果，只返回数据
    const result = await Food.find(query)
      .select('name category riskLevel purineContent')
      .limit(100)
      .lean();

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