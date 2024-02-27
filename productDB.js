require("dotenv").config();
const connectDB = require("./db/connect");
const ProductModel = require("./models/product");
const ProductJson = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await ProductModel.create(ProductJson);
    console.log("Success");
  } catch (error) {
    console.log(error);
  }
};
start();
