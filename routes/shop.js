const express = require("express");

const router = express.Router();

const userPage = require('../controllers/user')

router.get("/shop",userPage.shopAt );

  router.get("/contactus", userPage.contactUs);
  router.get("/success", userPage.successPage);


module.exports = router;