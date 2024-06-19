const express = require("express");
const router = express.Router();

const postController = require("../controllers/postController");

// Post new message
router.post("/", postController.post);

// Confirm Post delete on GET
router.get("/:postID", postController.post_delete_confirm);

// Delete Post on GET
router.get("/:postID/delete", postController.post_delete);

module.exports = router;
