const path = require('path');

const express = require('express');

//const rootDir = require('../util/path'); COMMENTED OUT BY AH
//const adminData = require('./admin'); COMMENTED OUT BY AH

const productsController = require('../controllers/products'); //ADDED BY AH

const router = express.Router();

router.get('/', productsController.getProducts); //ADDED BY AH

/* COMMENTED OUT BY AH
router.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
});
COMMENTED OUT BY AH */

module.exports = router;
