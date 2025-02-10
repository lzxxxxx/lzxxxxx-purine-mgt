const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  purineContent: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['vegetables', 'fruits', 'meat', 'seafood', 'others']
  },
  description: {
    type: String,
    default: ''
  },
  imageUrl: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// 添加复合索引
foodSchema.index({ category: 1, name: 1 });
foodSchema.index({ name: 1 });  // 支持文本搜索

module.exports = mongoose.model('Food', foodSchema); 