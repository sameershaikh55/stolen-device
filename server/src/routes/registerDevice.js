const express = require("express");
const router = express.Router();
const upload = require("../utils/imageUpload");

// MIDDLEWARE
const { authentication } = require("../middleware/authentication");

// CONTROLLERS
const {
  registerDevice,
  editDevice,
  getRegisteredDevice,
} = require("../controller/registerDevices");
const { deviceAuthentication } = require("../middleware/deviceAuthentication");

// ADD DEVICE
router
  .route("/")
  .post(authentication, upload.single("deviceImage"), registerDevice);

// GET AND EDIT DEVICE
router
  .route("/:id")
  .get(authentication, deviceAuthentication, getRegisteredDevice)
  .put(
    authentication,
    deviceAuthentication,
    upload.single("deviceImage"),
    editDevice
  );

module.exports = router;
