require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  const startTime = Date.now();
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`数据库连接成功，耗时: ${Date.now() - startTime}ms`);
    
    // 测试查询
    const queryStart = Date.now();
    const result = await mongoose.connection.db.collection('foods').find({}).limit(10).toArray();
    console.log('测试查询结果:', result);
    console.log(`查询耗时: ${Date.now() - queryStart}ms`);
    
    mongoose.connection.close();
  } catch (error) {
    console.error('数据库连接失败:', error);
  }
};

connectDB();