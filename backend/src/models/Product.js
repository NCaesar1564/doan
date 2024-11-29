const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageProduct: {type: Array, require: true},
  description: { type: String },
  firstprice: { type: Number, required: true },
  lastprice: { type: Number, required: true },
  nameBrand: {type: String, require: true},
  nameCategory: {type: String, require: true}
});

module.exports = mongoose.model('Product', productSchema);
