const express = require('express');
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
var router = express.Router();

const app = express();
var bodyParser = require('body-parser')

const port = 8443;

const api = new WooCommerceRestApi({
    url: "http://localhost/dstore/",
    consumerKey: "ck_17169cc6fe7313ded1fd33d0d39e248ae77b3307",
    consumerSecret: "cs_1d706ae7fa13a337297a47d31272ceafab21ccc4",
    version: "wc/v3"
});
module.exports = api;
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())
var product = require('./product.js');
app.use('/product', product);
var auth = require('./auth.js');
app.use('/auth', auth);
var order = require('./order.js');
app.use('/order', order);
var order = require('./customer.js');
app.use('/customer', order);

//both index.js and things.js should be in same directory



app.listen(port, function () {
    console.log("Server is running on " + port + " port");
});

app.get('/check', function (req, res) {
    res.send("server is running!");
});

