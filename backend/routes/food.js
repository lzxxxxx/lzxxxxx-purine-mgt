const express = require('express');
const router = express.Router();
const Food = require('../models/Food');
const mongoose = require('mongoose');

// GET /api/foods
router.get('/', async (req, res) => {
  const startTime = Date.now();
  let queryStartTime;
  
  try {
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
      .exec();

    const queryEndTime = Date.now();
    
    console.log({
      查询条件: query,
      数据量: foods.length,
      查询耗时: queryEndTime - queryStartTime,
      总耗时: queryEndTime - startTime,
      连接状态: mongoose.connection.readyState // 0 = 断开, 1 = 已连接, 2 = 连接中, 3 = 断开中
    });

    res.json(foods);
  } catch (error) {
    console.error('查询错误:', error);
    console.error('错误发生时间:', Date.now() - startTime);
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

module.exports = router; 