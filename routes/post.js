const express = require("express");
const router = express.Router();

const postController = require("../controllers/postController");

// Post new message
router.post("/", postController.post);

module.exports = router;
