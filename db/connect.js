const mongoose = require("mongoose");

const connectDB = (uri) => {
  console.log("Successfully connected with the mongooseDB");
  return mongoose.connect(uri);
};

module.exports = connectDB;
