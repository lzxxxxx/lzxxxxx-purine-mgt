const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log('开始连接数据库...');
    const startTime = Date.now();
    
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      maxPoolSize: 5,         // 减小连接池大小
      minPoolSize: 2,         // 保持最小连接数
      maxIdleTimeMS: 30000,   // 增加空闲时间
      // 超时设置
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 60000,
      // 读写策略
      readPreference: 'nearest',
      readConcern: { level: 'local' },  // 使用本地读取级别
      // 启用压缩
      compressors: ['zlib']
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

    // 添加连接池监控
    setInterval(() => {
      const poolStats = mongoose.connection.client.topology?.s?.pool;
      console.log('定期连接池状态检查:', {
        时间: new Date().toISOString(),
        当前连接数: poolStats?.totalConnectionCount || 'unknown',
        可用连接数: poolStats?.availableConnectionCount || 'unknown',
        等待队列: poolStats?.waitQueueSize || 'unknown'
      });
    }, 60000);  // 每分钟检查一次

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