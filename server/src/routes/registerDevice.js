const express = require("express");
const router = express.Router();
const upload = require("../utils/imageUpload");

// MIDDLEWARE
const { authentication } = require("../middleware/authentication");

// CONTROLLERS
const { registerDevice } = require("../controller/registerDevices");

// ROUTES
router
  .route("/add")
  .post(authentication, upload.single("deviceImage"), registerDevice);

module.exports = router;
