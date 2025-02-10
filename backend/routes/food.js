const express = require('express');
const router = express.Router();
const Food = require('../models/Food');

// GET /api/foods
router.get('/', async (req, res) => {
  const startTime = Date.now();
  try {
    const { category, riskLevel, search } = req.query;
    let query = {};

    // 构建查询条件
    if (category) {
      query.category = category;
    }
    if (riskLevel) {
      query.riskLevel = riskLevel;
    }
    if (search) {
      query.name = { $regex: search, $options: 'i' }; // i表示不区分大小写
    }
    
    // 分步骤执行查询以便监控
    const queryStart = Date.now();
    const foods = await Food.find(query)
      .lean()
      .exec();
    const queryEnd = Date.now();

    console.log(`========DB Query execution time: ${queryEnd - queryStart}ms`);
    res.json(foods);
    console.log(`========Total response time: ${Date.now() - startTime}ms`);
  } catch (error) {
    console.error('Error fetching foods:', error);
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