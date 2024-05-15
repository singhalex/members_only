const express = require("express");
const router = express.Router();

const signupController = require("../controllers/signupControllers");

// Get signup page
router.get("/", signupController.signup_get);

// Signup
router.post("/", signupController.signup_post);

module.exports = router;
