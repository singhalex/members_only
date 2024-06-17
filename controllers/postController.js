const Post = require("../models/posts");
const User = require("../models/user");

const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

exports.post = [
  // Validate and sanitize fields
  body("title")
    .trim()
    .isLength({ min: 3 })
    .escape()
    .withMessage("Title must be at least 3 characters long. "),
  body("message")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Message must not be empty"),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    // Return to the home page if not logged in
    if (!req.user) {
      res.redirect("/");
    }

    // Save post to DB
    const post = new Post({
      title: req.body.title,
      message: req.body.message,
      author: req.user.id,
    });

    await post.save();
    res.redirect("/");
  }),
];
