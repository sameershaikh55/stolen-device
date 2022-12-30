const express = require("express");
const router = express.Router();
const upload = require("../utils/imageUpload");

// MIDDLEWARE
const { authentication } = require("../middleware/authentication");

// CONTROLLERS
const { registerDevice, editDevice } = require("../controller/registerDevices");
const { deviceAuthentication } = require("../middleware/deviceAuthentication");

// ADD DEVICE
router
  .route("/")
  .post(authentication, upload.single("deviceImage"), registerDevice);

// EDIT DEVICE
router
  .route("/:id")
  .put(
    authentication,
    deviceAuthentication,
    upload.single("deviceImage"),
    editDevice
  );

module.exports = router;
