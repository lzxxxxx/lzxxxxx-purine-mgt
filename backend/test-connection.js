require('dotenv').config();
const mongoose = require('mongoose');

async function testConnection() {
    console.log('开始测试连接...');
    const startTime = Date.now();
    
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log(`连接成功！耗时: ${Date.now() - startTime}ms`);
        
        // 测试简单查询
        const stats = await mongoose.connection.db.stats();
        console.log('数据库状态:', {
            dbName: stats.db,
            collections: stats.collections,
            objects: stats.objects,
            avgObjSize: stats.avgObjSize,
        });
        
        // 测试查询性能
        const Food = require('./models/Food');
        console.log('开始测试查询...');
        const queryStart = Date.now();
        const count = await Food.countDocuments();
        console.log(`查询完成！文档数量: ${count}, 耗时: ${Date.now() - queryStart}ms`);
        
    } catch (error) {
        console.error('连接测试失败:', error);
    } finally {
        await mongoose.disconnect();
        console.log('测试完成，连接已关闭');
    }
}

testConnection(); 