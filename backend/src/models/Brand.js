const mongoose = require('mongoose');

// Định nghĩa schema của Brand
const BrandSchema = new mongoose.Schema({
  nameBrand: {
    type: String,
    required: true,
    trim: true,
    unique: true, 
  },
  imageBrand: {
    type: String, 
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, 
  },
});

module.exports = mongoose.model('Brand', BrandSchema);
