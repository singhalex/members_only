var express = require("express");
var router = express.Router();
const Post = require("../models/posts");

/* GET home page. */
router.get("/", async function (req, res, next) {
  const allPosts = await Post.find().populate("author").exec();

  res.render("index", {
    user: res.locals.currentUser,
    posts: allPosts.reverse(),
  });
});

module.exports = router;
