const path = require('path');

const rootDir  = require('../utils/path')

exports.loadError = (req,res,next) =>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
 }