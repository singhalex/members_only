const express = require("express");
const router = express.Router();

const signupController = require("../controllers/userControllers");

// Get signup page
router.get("/", signupController.signup_get);

module.exports = router;
