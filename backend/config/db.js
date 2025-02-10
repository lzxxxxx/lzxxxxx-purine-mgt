const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log('开始连接数据库...');
    const startTime = Date.now();
    
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // 添加重试机制
      retryWrites: true,
      // 读写关注
      w: 'majority',
      readPreference: 'primary',
      // 连接池设置
      maxPoolSize: 10,
      minPoolSize: 5,
      // 超时设置
      connectTimeoutMS: 30000,
      socketTimeoutMS: 45000,
      // 心跳设置
      heartbeatFrequencyMS: 10000,
      // 服务器选择超时
      serverSelectionTimeoutMS: 30000,
      // 开启命令监控
      monitorCommands: true
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