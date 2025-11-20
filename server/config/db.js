const mongoose = require("mongoose");

require("dotenv").config();

async function connectDB() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connection Successful");
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = connectDB;
