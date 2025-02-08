const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const foodRoutes = require('./routes/food');
const dietRecordRoutes = require('./routes/dietRecord');

const app = express();
const port = process.env.PORT || 3000;

// 连接数据库
connectDB();

app.use(cors({
  origin: '*',  // 允许所有来源访问
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// 注册路由
app.use('/api/foods', foodRoutes);
app.use('/api/diet-records', dietRecordRoutes);

// 基础路由
app.get('/', (req, res) => {
  res.json({ message: '微信小程序后端服务运行正常' });
});

app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
}); 