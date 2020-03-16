var express = require('express');
var router = express.Router();
const api = require('./index.js')

router.get('/getCustomer', (req, res) => {

    console.log(req.query.id)
  api.get(`customers/${req.query.id}`)
    .then((response) => {
        res.send(response.data)
        console.log(response.data);
    })
    .catch((error) => {
        res.send(error.response.data)
      console.log(error.response.data);
    });

})


module.exports = router;