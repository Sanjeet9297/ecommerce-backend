const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('../models/Product');
const connectDB = require('../config/db');

dotenv.config();

connectDB();

const products = [
  { id: 1, category: "FASHION", name: "Beige Tailored Blazer", price: "₹4,999", soldOut: false, image: "/faishon2.jpg", rating: "4.7" },
  { id: 2, category: "FASHION", name: "Canvas Lowtop Sneakers", price: "₹2,499", soldOut: true, image: "/faishon1.jpg", rating: "4.5" },
  { id: 3, category: "ELECTRONICS", name: "Studio Wireless Headphones", price: "₹12,999", soldOut: false, image: "/electronic2.jpg", rating: "4.8" },
  { id: 4, category: "ELECTRONICS", name: "Onyx Audio Pro", price: "₹9,499", soldOut: false, image: "/electronic1.jpg", rating: "4.6" },
  { id: 5, category: "ACCESSORIES", name: "Minimal Steel Watch", price: "₹7,999", soldOut: false, image: "/accessories1.jpg", rating: "4.7" },
  { id: 6, category: "BEAUTY", name: "Skincare Essence Bottle", price: "₹1,499", soldOut: false, image: "/beauty1.jpg", rating: "4.4" },
  { id: 7, category: "FASHION", name: "Men's Classic Denim Jacket", price: "₹3,499", soldOut: false, image: "/faishon1.jpg", rating: "4.6" },
  { id: 8, category: "FASHION", name: "Men's Formal Oxford Shoes", price: "₹4,299", soldOut: false, image: "/faishon2.jpg", rating: "4.8" },
  { id: 9, category: "FASHION", name: "Women's Summer Floral Dress", price: "₹2,999", soldOut: false, image: "/faishon1.jpg", rating: "4.7" },
  { id: 10, category: "FASHION", name: "Women's Evening Gown", price: "₹8,999", soldOut: false, image: "/faishon2.jpg", rating: "4.9" },
  { id: 11, category: "FASHION", name: "Child's Cotton T-Shirt Set", price: "₹1,299", soldOut: false, image: "/faishon1.jpg", rating: "4.5" },
  { id: 12, category: "FASHION", name: "Child's Winter Jacket", price: "₹2,599", soldOut: false, image: "/faishon2.jpg", rating: "4.6" },
  { id: 13, category: "FASHION", name: "Parents Matching Cozy Sweaters", price: "₹5,499", soldOut: false, image: "/faishon1.jpg", rating: "4.8" },
  { id: 14, category: "FASHION", name: "Family Vacation T-Shirts (All)", price: "₹3,999", soldOut: false, image: "/faishon2.jpg", rating: "4.7" },
  { id: 15, category: "ACCESSORIES", name: "Leather Crossbody Bag", price: "₹3,499", soldOut: false, image: "/accessories1.jpg", rating: "4.5" },
  { id: 16, category: "ACCESSORIES", name: "Polarized Aviator Sunglasses", price: "₹1,999", soldOut: false, image: "/accessories1.jpg", rating: "4.4" },
  { id: 17, category: "ELECTRONICS", name: "Smart Fitness Watch", price: "₹5,999", soldOut: false, image: "/electronic1.jpg", rating: "4.6" },
  { id: 18, category: "ELECTRONICS", name: "4K Action Camera", price: "₹14,999", soldOut: true, image: "/electronic2.jpg", rating: "4.7" },
  { id: 19, category: "BEAUTY", name: "Hydrating Face Serum", price: "₹1,899", soldOut: false, image: "/beauty1.jpg", rating: "4.8" },
  { id: 20, category: "BEAUTY", name: "Organic Matte Lipstick", price: "₹999", soldOut: false, image: "/beauty1.jpg", rating: "4.3" }
];

const importData = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

importData();
