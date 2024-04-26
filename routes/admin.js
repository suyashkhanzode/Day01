const express = require("express");

const router = express.Router();



const productController = require('../controllers/product')

router.get("/add-product", productController.getAddproduct)

router.post("/product", (req, res, next) => {
  console.log(req.body);
});

module.exports = router;
