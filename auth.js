var express = require('express');
var router = express.Router();
const api = require('./index.js')


router.post('/signUp', (req, res) => {
  console.log(req.body)
  api.post("customers", {
    email: req.body.email,
    billing: { postcode: req.body.password }
  })
    .then((response) => {
      console.log(response.data);
      res.send(response.data)
    })
    .catch((error) => {
      console.log(error.response.data);
      res.send(error.response.data)
    });
})


router.get('/login', (req, res) => {
  console.log(req.query)
  api.get("customers", {
     email: req.query.email,
  })
    .then((response) => {
      console.log(response.data);
      res.send(response.data)
    })
    .catch((error) => {
      console.log(error.response.data);
    });
})


module.exports = router;