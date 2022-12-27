const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const StolenDeviceModel = require("../models/stolenDevice");
const RegistrationModel = require("../models/registration");
const sendResponse = require("../utils/sendResponse");
const path = require("path");
const fs = require("fs");

// REPORT DEVICES
exports.reportDevice = catchAsyncErrors(async (req, res, next) => {
  const isAdded = await StolenDeviceModel.findOne({
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

  const newDevice = await StolenDeviceModel.create({
    user: res.user._id,
    ...req.body,
  });

  const user = await RegistrationModel.findById(res.user._id);
  user.devices.stolen.push(req.body._id);
  await user.save();

  sendResponse(true, 201, "device", newDevice, res);
});
