var express = require('express');
var router = express.Router();
const api = require('./index.js')



router.post('/createOrder', (req, res) => {

  console.log(req.body)
  const data = {
    payment_method_title: "Cash On Delievey",
    set_paid: false,
    billing: {
      first_name: req.body.name,
      address_1: req.body.address,
      city: req.body.city,
      country: "Pakistan",
      email: req.body.email,
      phone: req.body.number
    },
    shipping: {
      first_name: req.body.name,
      address_1: req.body.address,
      city: req.body.city,
      country: "Pakistan",
    },
    line_items: req.body.line,
    shipping_lines: [
      {
        method_id: "flat_rate",
        method_title: "Flat Rate",
        // total: req.query.total.toString()
      }
    ]
  }
  api.post("orders", data)
    .then((response) => {
      console.log(response.data);
      res.send(response.data)
    })
    .catch((error) => {
      console.log(error.response.data);
    });
})

router.get('/getOrder', (req, res) => {


  api.get("orders", {customer: 2})
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.response.data);
    });

})


module.exports = router;