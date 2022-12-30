const express = require("express");
const router = express.Router();
const upload = require("../utils/imageUpload");

// MIDDLEWARE
const { authentication } = require("../middleware/authentication");

// CONTROLLERS
const {
  reportDevice,
  searchReportedDevices,
  reportedDeviceDetail,
} = require("../controller/stolenDevice");

// ROUTES
router
  .route("/report")
  .post(authentication, upload.single("deviceImage"), reportDevice);

router.route("/search/results").get(authentication, searchReportedDevices);

router.route("/reported/:id").get(authentication, reportedDeviceDetail);

module.exports = router;
