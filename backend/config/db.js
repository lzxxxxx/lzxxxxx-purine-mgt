const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log('开始连接数据库...');
    const startTime = Date.now();
    
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // 减少重试次数，加快失败检测
      serverSelectionTimeoutMS: 15000,
      socketTimeoutMS: 30000,
      // 增加连接池大小
      maxPoolSize: 20,
      minPoolSize: 5,
      // 启用压缩
      compressors: ['zlib'],
      // 设置更积极的心跳
      heartbeatFrequencyMS: 5000,
      // 读写策略
      readPreference: 'nearest',  // 连接最近的节点
      w: 1  // 降低写入确认级别
    });

    console.log(`数据库连接成功，耗时: ${Date.now() - startTime}ms`);
    console.log(`连接地址: ${conn.connection.host}`);

    // 监控连接状态
    mongoose.connection.on('connected', () => {
      console.log('Mongoose 连接成功');
    });

    mongoose.connection.on('error', (err) => {
      console.error('Mongoose 连接错误:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('Mongoose 连接断开');
    });

  } catch (error) {
    console.error('数据库连接失败:', error);
    process.exit(1);
  }
};

module.exports = connectDB; 