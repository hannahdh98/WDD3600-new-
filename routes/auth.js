//imports
const express = require('express');
const { check, body } = require('express-validator/check');

const authController = require('../controllers/auth');
const User = require('../models/user');

//router import
const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

//checks if user entry is valid: email address
router.post(
    '/login',
    [
        body('email')
        .isEmail()
        .withMessage('Please enter a valid email address.')
        .normalizeEmail(),
       body ('password', 'Password has to be valid.')
        .isLength({ min: 5 })
        .isAlphanumeric()
        .trim()
    ],
        authController.postLogin
);
//sends message if email isnt valid
router.post(
    '/signup',
    [
    check('email')
        .isEmail()
        .withMessage('Please enter a valid email.')
        .custom((value, {req}) => {

            return User.findOne({ email: value })
            .then(userDoc => {
                if (userDoc) {
                    return Promise.reject('Email address exists already, please pick a different one.');
                }
            });
        })
        .normalizeEmail(),
        body('password',
        'Please enter a password with at least 5 characters using numbers and letters.'
        )
        .isLength({min: 5})
        .isAlphanumeric()
        .trim(),
    body('confirmPassword')
        .trim()
        .custom((value, {req}) => {
            if (value !== req.body.password) {
                throw new Error('Passwords have to match!');
            }
            return true;
        })
    ],
        authController.postSignup);

//routes used
router.post('/logout', authController.postLogout);

router.get('/reset', authController.getReset);

router.post('/reset', authController.postReset);

router.get('/reset/:token', authController.getNewPassword);

router.post('/new-password', authController.postNewPassword);

module.exports = router;
