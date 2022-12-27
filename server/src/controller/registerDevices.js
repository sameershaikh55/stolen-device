const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const RegisterDevicesModel = require("../models/registerDevices");
const sendResponse = require("../utils/sendResponse");
const path = require("path");
const fs = require("fs");

// REGISTER DEVICES
exports.registerDevice = catchAsyncErrors(async (req, res, next) => {
  const isAdded = await RegisterDevicesModel.findOne({
    serial: req.body.serial,
  });

  if (isAdded) {
    const imgPath = path.resolve(
      __dirname,
      "../../" + "public/images",
      req.file.filename
    );
    fs.unlinkSync(imgPath);

    return next(new ErrorHandler("serial/IMEI Number already registered", 400));
  }

  const newDevice = await RegisterDevicesModel.create(req.body);
  sendResponse(true, 201, "device", newDevice, res);
});
