const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(
    `<form action = "/product" method ="POST"> Title: <input type ="text" name ="title"/> Size: <input type ="text" name ="size"/><button type = "submit">Add Product</button></form>`
  );
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
});

module.exports = router;
