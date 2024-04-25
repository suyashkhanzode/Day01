const http = require("http");

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');

app.use(bodyParser.urlencoded({extended : false}));

app.use('/admin',adminRoute);
app.use('/shop',shopRoute);

app.use((req,res,next) =>{
   res.status(404).send(`<h1>Page Not Found</h1>`)
})


app.listen(4000);
