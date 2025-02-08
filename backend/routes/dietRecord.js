const express = require('express');
const axios = require('axios');
const DietRecord = require('../models/DietRecord');
const multer = require('multer');
const { getCozeToken } = require('../utils/coze');
const { cosUpload } = require('../utils/cos');

const router = express.Router();
const upload = multer();

// 获取指定日期的饮食记录
router.get('/:date', async (req, res) => {
  try {
    const { date } = req.params;
    const userId = req.headers['user-id']; // 实际项目中应该从token中获取

    const startDate = new Date(date);
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(date);
    endDate.setHours(23, 59, 59, 999);

    const record = await DietRecord.findOne({
      userId,
      date: {
        $gte: startDate,
        $lte: endDate
      }
    });

    res.json(record || { records: [], totalPurine: 0 });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 上传食物图片并识别，注意这里没有添加到数据库的逻辑
router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const userId = req.headers['user-id'];
    const { file } = req;
    const fileBuffer = file.buffer;
    // 完整流程：生成jwt -> 获取coze token -> 调用coze api
    // 获取 Coze access token
    const cozeToken = await getCozeToken();
    const cosRes = await cosUpload(fileBuffer, userId);
    const imageUrl = 'https://' + cosRes.Location;
    const response = await axios.post('https://api.coze.cn/v1/workflow/run', {
      workflow_id: '7459330524962029579',
      parameters: {
        // imageUrl: "https://www.freeimg.cn/i/2025/01/14/6785f8019637b.webp",
        imgUrl: imageUrl,
      },
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cozeToken}`
      }
    });

    const {output} = JSON.parse(response.data.data);
    // 通过正则识别出 嘌呤总数 和 名称，识别到换行符为止
    const purineMatch = output.match(/- 嘌呤总数：.*?(\d+(\.\d+)?)(?=\s*mg(?=\n))/);
    const nameMatch = output.match(/- 这顿吃了啥：(.+?)(?=\n)/);

    const purine = purineMatch ? purineMatch[1] : 0;
    const name = nameMatch ? nameMatch[1] : '未知';
    // 模拟识别结果
    const recognitionResult = {
      name,
      purine,
      desc: output,
      imageUrl
    };

    res.json(recognitionResult);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 添加饮食记录
router.post('/', async (req, res) => {
  try {
    const userId = req.headers['user-id'];
    const { date, record } = req.body;

    const startDate = new Date(date);
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(date);
    endDate.setHours(23, 59, 59, 999);

    let dietRecord = await DietRecord.findOne({
      userId,
      date: {
        $gte: startDate,
        $lte: endDate
      }
    });

    if (!dietRecord) {
      dietRecord = new DietRecord({
        userId,
        date: new Date(date),
        records: [],
        totalPurine: 0
      });
    }

    dietRecord.records.push(record);
    dietRecord.totalPurine += +record.purine;

    await dietRecord.save();

    res.status(201).json(dietRecord);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 修改饮食记录
router.put('/:recordId', async (req, res) => {
  try {
    const { recordId } = req.params;
    const userId = req.headers['user-id'];
    const updates = req.body;

    const dietRecord = await DietRecord.findOneAndUpdate(
      { userId, 'records._id': recordId },
      { $set: { 'records.$': updates } },
      { new: true }
    );

    res.json(dietRecord);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 删除饮食记录
router.delete('/:recordId', async (req, res) => {
  try {
    const { recordId } = req.params;
    const userId = req.headers['user-id'];

    const dietRecord = await DietRecord.findOneAndUpdate(
      { userId },
      { 
        $pull: { records: { _id: recordId } },
        $inc: { totalPurine: -req.body.purine }
      },
      { new: true }
    );

    res.json(dietRecord);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 