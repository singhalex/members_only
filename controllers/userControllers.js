const User = require("../models/user");

const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

// Display user sign-up page
exports.signup_get = asyncHandler(async (req, res, next) => {
  res.render("signup");
});
