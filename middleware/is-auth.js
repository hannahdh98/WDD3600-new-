module.exports = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        //this is used in case user doesnt login
        return res.redirect('/login');
    }
    next();
}