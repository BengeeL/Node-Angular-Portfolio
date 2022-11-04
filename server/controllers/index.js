// index.js - Benjamin Lefebvre - 301234587 - Oct 22nd

let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let passport = require("passport");

// Enable JWT
let jwt = require('jsonwebtoken');
let DB = require('../config/db');

// Create User model instance
let userModel = require("../models/user");
let User = userModel.User;

const currentYear = new Date().getFullYear();

module.exports.displayHomePage = (req, res, next) => {
  res.render("index", {
    title: "Home",
    displayName: req.user ? req.user.displayName : "",
    year: currentYear,
  });
};

module.exports.displayAboutPage = (req, res, next) => {
  res.render("index", {
    title: "About Me",
    displayName: req.user ? req.user.displayName : "",
    year: currentYear,
  });
};

module.exports.displayProjectsPage = (req, res, next) => {
  res.render("index", {
    title: "Projects",
    displayName: req.user ? req.user.displayName : "",
    year: currentYear,
  });
};

module.exports.displayServicesPage = (req, res, next) => {
  res.render("index", {
    title: "Services",
    displayName: req.user ? req.user.displayName : "",
    year: currentYear,
  });
};

module.exports.displayContactPage = (req, res, next) => {
  res.render("index", {
    title: "Contact",
    displayName: req.user ? req.user.displayName : "",
    year: currentYear,
  });
};

module.exports.processContactPage = (req, res, next) => {
  // Capture Information
  const name = req.body.name;
  const phone = req.body.phone;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;

  console.log(req.body);

  // Sending to home page
  res.render("index", {
    title: "Home",
    displayName: req.user ? req.user.displayName : "",
    year: currentYear,
  });
};

module.exports.displayResumePage = (req, res, next) => {
  res.render("index", {
    title: "Resume",
    displayName: req.user ? req.user.displayName : "",
    year: currentYear,
  });
};

module.exports.displayLoginPage = (req, res, next) => {
  if (!req.user) {
    res.render("auth/login", {
      title: "Please Login",
      messages: req.flash('loginMessage'),
      displayName: req.user ? req.user.displayName : "",
      year: currentYear,
    });
  } else {
    return res.redirect("/");
  }
};

module.exports.processLoginPage = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    // Server error
    if (err) {
      return next(err);
    }
    // is there a user login error
    if (!user) {
      req.flash('loginMessage', 'Authentication Error');
      return res.redirect("/login");
    }
    req.login(user, (err) => {
      // Server Error
      if (err) {
        return next(err);
      }

      const payload = {
                id: user._id,
                displayName: user.displayName,
                username: user.username,
                email: user.email
      };

      const authToken = jwt.sign(payload, DB.SESSION_SECRET, {
        expiresIn: 604800 // 1 week 
      });

      /* TODO - Getting Ready to convert to API
      res.json({success: true, msg: 'User Logged in Successfully!', user: {
          id: user._id,
          displayName: user.displayName,
          username: user.username,
          email: user.email
      }, token: authToken});
      */

      res.redirect("/business_contact");
    });
  })(req, res, next);
};

module.exports.displayRegisterPage = (req, res, next) => {
  // If user not already logged in
  if (!req.user) {
    res.render("auth/register", {
      title: "Please Register",
      messages: req.flash('registerMessage'),
      displayName: req.user ? req.user.displayName : "",
      year: currentYear,
    });
  } else {
    return res.redirect("/");
  }
};

module.exports.processRegisterPage = (req, res, next) => {
  // Instanciate a user object
  let newUser = new User({
    username: req.body.username,
    email: req.body.email,
    displayName: req.body.displayName,
  });

  User.register(newUser, req.body.password, (err) => {
    if (err) {
      console.log("Error: Adding new user");
      if (err.name == "UserExistsError") {
        req.flash(
                    'registerMessage',
                    'Registration Error: User Already Exists!'
                );
        console.log("Error: User Already Exist");
      }
      return res.render("auth/register", {
        title: "Please Register",
        messages: req.flash('registerMessage'),
        displayName: req.user ? req.user.displayName : "",
        year: currentYear,
      });
    } else {
        // If no error exist 

        // Redirect user and authenticate them 

        /* TODO - Getting Ready to convert to API
        res.json({success: true, msg: 'User Registered Successfully!'});
        */

        return passport.authenticate('local') = (req, res, next) => {
            res.redirect("/business_contact")
        }
    }
  });
};

module.exports.processLogoutRequest = (req, res, next) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
};
