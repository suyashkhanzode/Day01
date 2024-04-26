const http = require("http");

const path = require('path')

const express = require('express');

const errorHandler = require('./controllers/error')

const bodyParser = require('body-parser');

const app = express();

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');

app.use(bodyParser.urlencoded({extended : false}));

app.use('/admin',adminRoute);
app.use('/shop',shopRoute);

app.use(errorHandler.loadError)


app.listen(4000);
