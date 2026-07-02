const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('../models/Product');
const connectDB = require('../config/db');

dotenv.config();
connectDB();

const importData = async () => {
  try {
    console.log("Fetching products from dummyjson API...");
    const response = await fetch('https://dummyjson.com/products?limit=150');
    const data = await response.json();
    
    let products = [];
    
    data.products.forEach((p, index) => {
      let cat = "FASHION";
      let name = p.title;
      let priceInInr = (Math.round(p.price * 80)).toLocaleString('en-IN');
      
      // Categorization logic based on DummyJSON categories
      if (['smartphones', 'laptops', 'tablets', 'mobile-accessories'].includes(p.category)) {
        cat = "ELECTRONICS";
      } else if (['fragrances', 'skincare', 'beauty'].includes(p.category)) {
        cat = "BEAUTY";
      } else if (['womens-watches', 'mens-watches', 'womens-bags', 'womens-jewellery', 'sunglasses', 'sports-accessories'].includes(p.category)) {
        cat = "ACCESSORIES";
      } else if (['womens-dresses', 'womens-shoes', 'tops'].includes(p.category)) {
        cat = "FASHION";
        name = "Women's " + p.title;
      } else if (['mens-shirts', 'mens-shoes'].includes(p.category)) {
        cat = "FASHION";
        name = "Men's " + p.title;
      } else {
        // use other categories to simulate Child and Parents fashion
        const randomType = index % 4;
        if (randomType === 0) {
          cat = "FASHION";
          name = "Kids' " + p.title;
        } else if (randomType === 1) {
          cat = "FASHION";
          name = "Parents Matching " + p.title;
        } else if (randomType === 2) {
          cat = "FASHION";
          name = "Boys & Girls " + p.title;
        } else {
          cat = "ACCESSORIES";
        }
      }

      products.push({
        id: p.id,
        category: cat,
        name: name,
        price: `₹${priceInInr}`,
        soldOut: p.stock < 15, // some random soldOut
        image: p.thumbnail || (p.images && p.images[0]) || "/faishon1.jpg",
        rating: p.rating ? p.rating.toString() : "4.5"
      });
    });

    await Product.deleteMany();
    await Product.insertMany(products);
    console.log(`Successfully imported ${products.length} diverse products from API!`);
    process.exit();
  } catch (error) {
    console.error(`Error importing from API: ${error}`);
    process.exit(1);
  }
};

importData();
