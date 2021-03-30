//import path
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');

//imports error.js
const errorController = require('./controllers/error');
const mongoConnect = require('./util/database').mongoConnect;
const User = require('./models/user');

//imports modules
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//has the bodyParser, pardt the body that is sent throhght the form
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use ((req, res, next) =>
//    User.findbyId()
//    .then
// });
app.use((req, res, next) => {
  //uses id to search for that user
  User.findById('6048fe5037c6e1ff075b8ed1')
    .then(user => {
      req.user = new User(user.name, user.email, user.cart, user._id);
      next();
    })
    .catch(err => console.log(err));
});
//router object
app.use('/admin', adminRoutes);
app.use(shopRoutes);

//middleware to handle 404
//app.use((req, res, next) => {
      // res.status(404).render('404', {pageTitle: 'Page Not Found });
//});

//get404 function
app.use(errorController.get404);

mongoose.connect('mongodb+srv://hannah_hitchcock12:Purple12@cluster0.mzrnx.mongodb.net/shop?retryWrites=true&w=majority').then(result => {
  app.listen(3000);
});
