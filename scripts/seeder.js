const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('../models/Product');
const connectDB = require('../config/db');

dotenv.config();

connectDB();

const products = [
  {
    id: 1,
    category: "FASHION",
    name: "Beige Tailored Blazer",
    price: "₹4,999",
    soldOut: false,
    image: "/faishon2.jpg",
    rating: "4.7"
  },
  {
    id: 2,
    category: "FASHION",
    name: "Canvas Lowtop Sneakers",
    price: "₹2,499",
    soldOut: true,
    image: "/faishon1.jpg",
    rating: "4.5"
  },
  {
    id: 3,
    category: "ELECTRONICS",
    name: "Studio Wireless Headphones",
    price: "₹12,999",
    soldOut: false,
    image: "/electronic2.jpg",
    rating: "4.8"
  },
  {
    id: 4,
    category: "ELECTRONICS",
    name: "Onyx Audio Pro",
    price: "₹9,499",
    soldOut: false,
    image: "/electronic1.jpg",
    rating: "4.6"
  },
  {
    id: 5,
    category: "ACCESSORIES",
    name: "Minimal Steel Watch",
    price: "₹7,999",
    soldOut: false,
    image: "/accessories1.jpg",
    rating: "4.7"
  },
  {
    id: 6,
    category: "BEAUTY",
    name: "Skincare Essence Bottle",
    price: "₹1,499",
    soldOut: false,
    image: "/beauty1.jpg",
    rating: "4.4"
  }
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
