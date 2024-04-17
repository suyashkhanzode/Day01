const http = require("http");

const express = require('express');

const app = express();

app.use((req,res,next) =>{
    console.log("Hello")
    next();
})

app.use((req,res,next) =>{
    console.log("World")
})



let server = http.createServer(app)

server.listen(4000);
