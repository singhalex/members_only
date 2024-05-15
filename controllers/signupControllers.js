const User = require("../models/user");

const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

// Display user sign-up page
exports.signup_get = asyncHandler(async (req, res, next) => {
  res.render("signup");
});

exports.signup_post = asyncHandler(async (req, res, next) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });

  const result = await user.save();

  res.redirect("/");
});
