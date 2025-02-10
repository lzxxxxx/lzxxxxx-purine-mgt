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
    if (category) query.category = category;
    if (riskLevel) query.riskLevel = riskLevel;
    if (search) query.name = { $regex: search, $options: 'i' };

    // 添加投影和限制
    const foods = await Food.find(query)
      .select('name category riskLevel purineContent') // 只选择必要字段
      .limit(100)  // 限制返回数量
      .lean()
      .exec();

    console.log(`查询条件: ${JSON.stringify(query)}`);
    console.log(`返回数据量: ${foods.length}`);
    console.log(`查询耗时: ${Date.now() - startTime}ms`);

    res.json(foods);
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

module.exports = router; 