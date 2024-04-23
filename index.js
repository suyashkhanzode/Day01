const http = require("http");

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended : false}));

app.use('/add-product',(req,res,next) =>{
  res.send(`<form action = "/product" method ="POST"> Title: <input type ="text" name ="title"/> Size: <input type ="text" name ="size"/><button type = "submit">Add Product</button></form>`);
    
})

app.use('/product',(req,res,next) =>{
    console.log(req.body);
    
  })




app.listen(4000);
