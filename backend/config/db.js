const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log('开始连接数据库...');
    const startTime = Date.now();
    
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // 优化连接池
      maxPoolSize: 10,        // 减小连接池，避免资源浪费
      minPoolSize: 3,         // 保持最小连接数
      maxIdleTimeMS: 10000,   // 空闲连接最大存活时间
      // 超时设置
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
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