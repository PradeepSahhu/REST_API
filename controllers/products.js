const ProductModel = require("../models/product");

const getAllProducts = async (req, res) => {
  const myData = await ProductModel.find(req.query);
  res.status(200).json({ myData });
};

const getAllProductsTesting = async (req, res) => {
  const myData = await ProductModel.find(req.query);
  res.status(200).json({ myData });
};

module.exports = { getAllProducts, getAllProductsTesting };
