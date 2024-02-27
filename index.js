//! Creating REST API.
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const connectDB = require("./db/connect");

app.get("/", (req, res) => {
  res.send("I am live and working");
  res.end();
});

const products_routes = require("./routes/products");

// app.listen(PORT, () => {
//   console.log(`Listening on ${PORT}`);
// });
//? middleware or to set router.

app.use("/api/products", products_routes);

//! Alternative of above code.
const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`${PORT} listening on this port`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
