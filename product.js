var express = require('express');
var router = express.Router();
const api = require('./index.js')


router.get('/getProducts', (req, res) => {

  api.get("products", {
    per_page: 20, // 20 products per page
  })
    .then((response) => {
      // // Successful request
      // console.log("Response Status:", response.status);
      // console.log("Response Headers:", response.headers);
      // console.log("Response Data:", response.data);
      res.send(response.data)
      // console.log("Total of pages:", response.headers['x-wp-totalpages']);
      // console.log("Total of items:", response.headers['x-wp-total']);
    })
    .catch((error) => {
      // Invalid request, for 4xx and 5xx statuses
      // console.log("Response Status:", error.response.status);
      // console.log("Response Headers:", error.response.headers);
      // console.log("Response Data:", error.response.data);
    })
    .finally(() => {
      // Always executed.
    });

})

router.get('/getFeature', (req, res) => {
  api.get("products", {
    featured: true
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


router.get('/getOnsale', (req, res) => {
  api.get("products", {
    on_sale: true,
    per_page: 8, // 20 products per page
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


router.get('/getCategoryProduct', (req, res) => {
  api.get("products", {
    per_page: 8, // 20 products per page
    category: req.query.id
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


router.get('/getAllCategories', (req,res)=>{
  api.get("products/categories")
  .then((response) => {
    console.log(response.data);
    res.send(response.data)
  })
  .catch((error) => {
    console.log(error.response.data);
  });
})


router.post('/', function (req, res) {
  res.send('POST route on product.');
});

//export this router to use in our index.js
module.exports = router;