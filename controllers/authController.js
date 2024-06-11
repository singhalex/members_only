const User = require("../models/user");
const passport = require("../utils/passport");

const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

// Display user sign-up page
exports.signup_get = asyncHandler(async (req, res, next) => {
  res.render("signup");
});

// Save the user in the DB
exports.signup_post = asyncHandler(async (req, res, next) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });

  const result = await user.save();

  res.redirect("/");
});

exports.login_post = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/",
});

exports.logout_get = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }

    res.redirect("/");
  });
};
