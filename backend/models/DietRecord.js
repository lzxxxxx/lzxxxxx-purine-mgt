const mongoose = require('mongoose');

const dietRecordSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    index: true
  },
  date: {
    type: Date,
    required: true,
    index: true
  },
  records: [{
    name: {
      type: String,
      required: true
    },
    purine: {
      type: Number,
      required: true
    },
    imageUrl: String,
    time: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    }
  }],
  totalPurine: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('DietRecord', dietRecordSchema); 