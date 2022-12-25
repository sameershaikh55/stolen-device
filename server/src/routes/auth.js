const express = require("express");
const router = express.Router();

// MIDDLEWARE
const { authentication } = require("../middleware/authentication");

// CONTROLLERS
const {
  register,
  login,
  logout,
  getUserData,
  // changeUserImage,
} = require("../controller/auth");

// ROUTES
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/get-user-data").get(authentication, getUserData);
// router.route("/update-profile-picture").patch(authentication, changeUserImage);

module.exports = router;
