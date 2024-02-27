const ProductModel = require("../models/product");

const getAllProducts = async (req, res) => {
  const { company, name, featured, sort, select } = req.query;
  const queryObject = {};
  if (company) {
    queryObject.company = company;
  }

  if (featured) {
    queryObject.featured = featured;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  let apiData = ProductModel.find(queryObject);

  if (sort) {
    let sortFix = sort.split(",").join(" ");
    apiData = apiData.sort(sortFix);
  }

  if (select) {
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 10;

  let skip = (page - 1) * limit;

  apiData = apiData.skip(skip).limit(limit);

  // console.log(queryObject);
  const myData = await apiData;
  res.status(200).json({ myData, ngHits: myData.length });
};

const getAllProductsTesting = async (req, res) => {
  const { company, name, featured, sort } = req.query;
  const queryObject = {};
  if (company) {
    queryObject.company = company;
  }

  if (featured) {
    queryObject.featured = featured;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  let apiData = ProductModel.find(queryObject);

  if (sort) {
    let sortFix = sort.replace(",", " ");
    apiData = apiData.sort(sortFix);
  }

  // console.log(queryObject);
  const myData = await apiData;
  res.status(200).json({ myData });
};

module.exports = { getAllProducts, getAllProductsTesting };
