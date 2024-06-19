const User = require("../models/user");
const passport = require("../utils/passport");
const bcrypt = require("bcryptjs");

const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

// Display user sign-up page
exports.signup_get = asyncHandler(async (req, res, next) => {
  res.render("signup", {
    errors: null,
    user: res.locals.currentUser,
    username: null,
    isAdmin: false,
  });
});

// Save the user in the DB
exports.signup_post = [
  // Validate and sanitize fields
  body("username")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Username cannot be empty."),
  body("password")
    .trim()
    .isLength({ min: 4 })
    .withMessage("Password must be at least 4 characters long"),
  body("confirm")
    .custom((value, { req }) => {
      return value === req.body.password;
    })
    .withMessage("Passwords do not match"),

  // Process request after validation and sanitation
  asyncHandler(async (req, res, next) => {
    // Extract validation erros from a request
    const errors = validationResult(req);

    bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
      if (err) return next(err);

      // Create a User object with the sanitized and trimmed data
      const user = new User({
        username: req.body.username,
        password: hashedPassword,
        isAdmin: req.body.admin === "on" ? true : false,
      });

      const userExists = await User.findOne({
        username: user.username,
      }).exec();

      if (userExists) {
        errors.errors.unshift({ msg: "This username already exists." });
      }

      if (!errors.isEmpty()) {
        // There are errors. Render the form again with the error messages
        res.render("signup", {
          errors: errors,
          user: res.locals.user,
          username: req.body.username,
          isAdmin: req.body.admin === "on" ? true : false,
        });
        return;
      } else {
        await user.save();
        res.redirect("/");
      }
    });
  }),
];

exports.login_get = (req, res, next) => {
  // Save error message then clear session message
  const lastError = req.session.messages;
  req.session.messages = "";

  res.render("login", {
    user: res.locals.user,
    errorMessage: lastError,
  });
};

exports.login_post = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/auth/login",
  failureMessage: true,
});

exports.logout_get = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
};
