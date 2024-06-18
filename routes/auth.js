const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

// Get signup page
router.get("/signup", authController.signup_get);

// Signup on submit
router.post("/signup", authController.signup_post);

// Get log in page
router.get("/login", authController.login_get);

// Log in on submit
router.post("/login", authController.login_post);

// Logout user
router.get("/logout", authController.logout_get);

module.exports = router;
