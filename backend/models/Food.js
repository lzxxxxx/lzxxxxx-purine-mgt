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

module.exports = mongoose.model('Food', foodSchema); 