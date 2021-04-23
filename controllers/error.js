//This exports the .get404 and gets the get404 function to render 404
/*exports.get404 = (req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
  };
  */

 //exports the 404 error
exports.get404 = (req, res, next) => {
  res.status(404).render('404', {
    pageTitle: 'Page Not Found',
    path: '/404',
    isAuthenticated: req.session.isLoggedIn
  });
};

//exports the 500 error
exports.get500 = (req, res, next) => {
  res.status(500).render('500', {
    pageTitle: 'Error!',
    path: '/500',
    isAuthenticated: req.session.isLoggedIn
  });
};