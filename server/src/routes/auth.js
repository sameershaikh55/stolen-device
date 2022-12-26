const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

// MIDDLEWARE
const { authentication } = require("../middleware/authentication");

// CONTROLLERS
const {
  register,
  login,
  logout,
  getUserData,
  forgotPassword,
  resetPassword,
  // changeUserImage,
} = require("../controller/auth");

// ROUTES
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/get-user-data").get(authentication, getUserData);
router
  .route("/password/forgot")
  .post(
    body("email").isEmail().withMessage("Please enter a valid email address"),
    forgotPassword
  );
router.route("/password/reset/:token").patch(resetPassword);
// router.route("/update-profile-picture").patch(authentication, changeUserImage);

module.exports = router;
