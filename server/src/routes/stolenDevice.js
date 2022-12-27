const express = require("express");
const router = express.Router();
const upload = require("../utils/imageUpload");

// MIDDLEWARE
const { authentication } = require("../middleware/authentication");

// CONTROLLERS
const { reportDevice } = require("../controller/stolenDevice");

// ROUTES
router
  .route("/report")
  .post(authentication, upload.single("deviceImage"), reportDevice);

module.exports = router;
