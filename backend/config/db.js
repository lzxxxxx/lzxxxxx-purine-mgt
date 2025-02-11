const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log('开始连接数据库...');
    const startTime = Date.now();
    
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      // 优化连接池
      maxPoolSize: 10,        // 减小连接池，避免资源浪费
      minPoolSize: 3,         // 保持最小连接数
      maxIdleTimeMS: 30000,   // 空闲连接最大存活时间
      // 超时设置
      serverSelectionTimeoutMS: 30000,  // 增加选择超时
      socketTimeoutMS: 60000,          // 增加 socket 超时
      // 启用压缩
      compressors: ['zlib'],
      // 调整心跳频率
      heartbeatFrequencyMS: 10000,
      // 读写策略
      readPreference: 'nearest',  // 连接最近的节点
      w: 1,
      // 重试设置
      retryWrites: true,
      retryReads: true
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
    // 添加重试逻辑
    if (error.name === 'MongoNetworkTimeoutError') {
      console.log('尝试重新连接...');
      setTimeout(connectDB, 5000);  // 5秒后重试
      return;
    }
    process.exit(1);
  }
};

module.exports = connectDB; 