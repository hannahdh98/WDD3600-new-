module.exports = (req, res, next) => {
      //this is used in case user doesnt login
    if (!req.session.isLoggedIn) {
        //redirects user to login page
        return res.redirect('/login');
    }
    next();
}
