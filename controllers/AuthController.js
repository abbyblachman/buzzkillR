const mongoose = require("mongoose");
const passport = require("passport");
const User = require("../models/User");

let userController = {};

userController.bodyTest = function(req, res) {
  console.log(req.body)
}

// Restrict access to root page
userController.home = function(req, res) {
  res.render('index', { user : req.user });
};

// Go to registration page
userController.register = function(req, res) {
  res.render('register');
};

// Post registration
userController.doRegister = function(req, res) {
 console.log(req.body)
  User.register(new User({ username : req.body.username}), req.body.password, function(err, user) {
    if (err) {
      return res.render('register', { user : user });
    }
    res.json(user)
    passport.authenticate('local')(req, res, function () {
      console.log('im authenticated bitchezzzzzzz')
      // res.redirect('/');
      // res.json({json: true})
    });
  });
};

// Go to login page
userController.login = function(req, res) {
  res.render('login');
};

// Post login
userController.doLogin = function(req, res) {
  passport.authenticate('local')(req, res, function () {
    res.redirect('/');
  });
};

// logout
userController.logout = function(req, res) {
  req.logout();
  res.redirect('/');
};

// find all  users 
userController.findAll = function(req, res) {
    User.find({})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err))
}

module.exports = userController;