const express = require("express");

const router = express.Router();

const path = require('path');


const rootDir  = require('../utils/path')

router.get("/shop", (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','shop.html'));
  });

  router.get("/contactus", (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','contactus.html'));
  });
  router.get("/success", (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','success.html'));
  });


module.exports = router;