const path = require('path');


const rootDir  = require('../utils/path')

exports.shopAt = (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','shop.html'));
  }

exports.contactUs = (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','contactus.html'));
  }

  exports.successPage = (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','success.html'));
  }