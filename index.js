const express = require('express');
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
var router = express.Router();

const app = express();
var bodyParser = require('body-parser')

const port = 8443;

const api = new WooCommerceRestApi({
    url: "http://hqce.tk/",
    consumerKey: "ck_2b3458d1eddeb85e6224e04776d4c3e30691e527",
    consumerSecret: "cs_69d87036a6533538c3895968f583065aaa033338",
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

