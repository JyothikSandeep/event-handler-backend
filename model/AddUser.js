// const bootstrap = require("bootstrap");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

  user_id: {
    type: String,
    required: [true, "User Id is required"],
    trim: true,
  },
  first_name: {
    type: String,
    required: [true, "User Id is required"],
    trim: true,
  },
  last_name: {
    type: String,
    required: [true, "User Id is required"],
    trim: true,
  },
  phonenumber: {
    type: Number,
    required: [true, "phonenumber is required"],
    trim: true,
  },
  password:{
    type:String,
  },
  gender: {
    type: String,
    required: [true, "gender is required"],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  password: {
    type: String,
    required: true,
  },
  account_active: {
    type: Boolean,
    default: true,
  },
  initial_password: {
    type: Boolean,
    default: true,
  },
  account_type:{
    type:String,
    default:"user"
  },
  date_of_birth:{
    type:Date,
    required:true,
  }
});

const User = new mongoose.model("User", UserSchema);

module.exports = { User };
