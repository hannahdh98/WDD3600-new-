//importing
const { validationResult } = require('express-validator/check');
const Product = require('../models/product');

const mongoose = require('mongoose');

const fileHelper = require('../util/file');
const product = require('../models/product');

//This exports the add product and exports function 
//This is for the admin
exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false,
    hasError: false,
    errorMessage: null,
    validationErrors: []
  });
};
//add a new product
exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;  
  const image = req.file;
  const price = req.body.price;
  const description = req.body.description;
  // check if image is set
  if (!image) {
    // return 422 error
    return res.status(422).render('admin/edit-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      editing: false,
      hasError: true,
      product: {
        title: title,
        price: price,
        description: description
      },
      //error message if the file is not an image
      errorMessage: 'Attached file is not an image.',
      validationErrors: []
    });
  }
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    // error status code
    return res.status(422).render('admin/edit-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      editing: false,
      hasError: true,
      product: {
        title: title,
        imageUrl: imageUrl,
        price: price,
        description: description
      },
      errorMessage: errors.array()[0].msg,
      validationErrors: errors.array()
    });
  }
  
  const imageUrl = image.path;

//this will create a new product with the title, price, description etc.
  const product = new Product({
    title: title, 
    price: price, 
    description: description, 
    imageUrl: imageUrl,
    userId: req.user
  });
  product
  .save()
  .then(result => {
    console.log('created product');
    res.redirect('/admin/products');
  })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });

};
//edit products
exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  //finds existing product by id
  const prodId = req.params.productId;
  Product.findById(prodId)
  .then(product => {
    if (!product) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
        product: product,
        hasError: false,
        errorMessage: null,
        validationErrors: []
        });
      })
      //This will throw the status code 500
      .catch(err => {
        const error = new Error(err);
        error.httpStatusCode = 500;
        return next(error);
    });
};
//This will edit the product and validate it
exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.file;
  const updatedDescription = req.body.description;
  const errors = validationResult(req);

//error status code
  if (!errors.isEmpty()) {
    return res.status(422).render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: true,
      hasError: true,
      product: {
        title: updatedTitle,
        imageUrl: updatedImageUrl,
        price: updatedPrice,
        description: updatedDescription,
        _id: prodId
      },
      //error messages
      errorMessage: errors.array()[0].msg,
      validationErrors: errors.array()
    });
  }

//this will find the product by id
Product.findById(prodId)
.then(product => {
  if (product.userId.toString() !== req.user._id.toString()) {
    return res.redirect('/');
  }
  product.title = updatedTitle;
  product.price = updatedPrice;
  product.description = updatedDescription;
  if (image) {
    fileHelper.deleteFile(product.imageUrl);
    product.imageUrl = image.path;
  }
  
  return product.save().then(result => {
    console.log('UPDATED PRODUCT');
    res.redirect('/admin/products');
  });
})

.catch(err => {
const error = new Error(err);
error.httpStatusCode = 500;
return next(error);
});
}

//this will get the products
exports.getProducts = (req, res, next) => {
//this uses the product.find to only get the products created by the user
  Product.find({ userId: req.user._id })
    .then(products => {
      console.log(products);
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });
    })
    //error code 500
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

//deletes the product
exports.deleteProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
  .then(product => {
    if (!product) {
      return next(new Error('Product not found.'));
    }
    fileHelper.deleteFile(product.imageUrl);
    return Product.deleteOne({_id: prodId, userId: req.user._id});
  })
  .then(() => {
    console.log('DESTROYED PRODUCT');
    res.status(200).json({message: 'Success!'});
  })
  .catch(err => {
    res.status(500).json({message: 'Deleting product failed.'});
  });
  
};
