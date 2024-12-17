require("dotenv").config(); // Load environment variables
const mongoose = require("mongoose");

const connectDb = async () => {
 
  const uri = process.env.MONGO_URI;
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB Atlas successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error.message);
  }
  // await mongoose.connect("mongodb://localhost:27017/testing").then(()=>{
  //     console.log("connected to database")
  // }).catch((err)=>{
  //     console.log(err.message);

  // });
};

module.exports = { connectDb };
