//import path
const path = require('path');

//import express
const express = require('express');
const { body } = require('express-validator/check');

//import
const adminController = require('../controllers/admin');
const isAuth = require('../middleware/is-auth');

//create router
const router = express.Router();

 router.get('/add-product', isAuth, adminController.getAddProduct);
 router.get('/products', isAuth, adminController.getProducts);

 router.post('/add-product', [
    body ('title')
        .isString()
        // title min is 3 characters
        .isLength({ min: 3 })
        .trim(),
    body ('price')
        .isFloat(),
    body ('description')
        // description min is 5 characters and max 400
        .isLength({ min: 5, max: 400 })
        .trim()
 ], 
 isAuth, 
 adminController.postAddProduct
 );

router.get('/edit-product/:productId', isAuth, adminController.getEditProduct);

router.post('/edit-product', [
    body ('title')
        // check if valid string
            .isString()
            // title min is 3 characters
            .isLength({ min: 3 })
            .trim(),
        body ('price')
            .isFloat(),
        body ('description')
            // description mins is 5 characters and max is 400
            .isLength({ min: 5, max: 400 })
            .trim()
    ], 
    isAuth, 
    adminController.postEditProduct
);

// delete route to delete product
router.delete('/product/:productId', isAuth, adminController.deleteProduct);

// exports router
module.exports = router;
