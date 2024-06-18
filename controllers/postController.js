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
    .withMessage("Title must be between 3 and 50 characters. "),
  body("message")
    .trim()
    .isLength({ min: 3 })
    .escape()
    .withMessage("Message must be between 3 and 200 characters."),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    // Return to the home page if not logged in
    if (!req.user) {
      res.redirect("/");
    }

    if (!errors.isEmpty()) {
      const allPosts = await Post.find().populate("author").exec();

      res.render("index", {
        errors: errors,
        user: res.locals.currentUser,
        // Display posts in reverse chrono order
        posts: allPosts.reverse(),
        title: req.body.title,
        message: req.body.message,
      });
      return;
    } else {
      // Save post to DB
      const post = new Post({
        title: req.body.title,
        message: req.body.message,
        author: req.user.id,
      });

      await post.save();
      res.redirect("/");
    }
  }),
];
