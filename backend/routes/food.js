const express = require('express');
const router = express.Router();
const Food = require('../models/Food');
const mongoose = require('mongoose');

// GET /api/foods
router.get('/', async (req, res) => {
  const startTime = Date.now();
  let queryStartTime;
  
  try {
    // 修改连接池状态监控的方式
    const connStats = {
      readyState: mongoose.connection.readyState,
      host: mongoose.connection.host,
      name: mongoose.connection.name
    };
    
    console.log('数据库连接状态:', {
      连接状态: connStats.readyState, // 0 = 断开, 1 = 已连接, 2 = 连接中, 3 = 断开中
      连接地址: connStats.host,
      数据库名: connStats.name
    });

    const { category, riskLevel, search } = req.query;
    let query = {};
    if (category) query.category = category;
    if (riskLevel) query.riskLevel = riskLevel;
    if (search) query.name = { $regex: search, $options: 'i' };

    // 记录查询开始时间
    queryStartTime = Date.now();
    console.log(`准备开始查询，距离请求开始: ${queryStartTime - startTime}ms`);

    // 添加执行计划分析
    const explain = await Food.find(query)
      .select('name category riskLevel purineContent')
      .limit(100)
      .lean()
      .explain('executionStats');

    const queryEndTime = Date.now();
    
    console.log({
      查询计划: explain.executionStats,
      查询耗时: queryEndTime - queryStartTime,
      总耗时: queryEndTime - startTime
    });

    // 执行实际查询
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