const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  category: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: String, required: true },
  soldOut: { type: Boolean, required: true, default: false },
  image: { type: String, required: true },
  rating: { type: String }
}, {
  timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
