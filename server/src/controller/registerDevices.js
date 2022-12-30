const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const RegisterDevicesModel = require("../models/registerDevices");
const RegistrationModel = require("../models/registration");
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

  const newDevice = await RegisterDevicesModel.create({
    user: res.user._id,
    ...req.body,
  });

  const user = await RegistrationModel.findById(res.user._id);
  user.devices.registered.push(req.body._id);
  await user.save();

  sendResponse(true, 201, "device", newDevice, res);
});

// REGISTER DEVICES
exports.editDevice = catchAsyncErrors(async (req, res, next) => {
  const updatedDevice = await RegisterDevicesModel.findByIdAndUpdate(
    req.params.id,
    {
      ...req.body,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  sendResponse(true, 200, "device", updatedDevice, res);
});
