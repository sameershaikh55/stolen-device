const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const StolenDeviceModel = require("../models/stolenDevice");
const RegistrationModel = require("../models/registration");
const RegisterDevicesModel = require("../models/registerDevices");
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

  await RegisterDevicesModel.findOneAndUpdate(
    {
      serial: req.body.serial,
    },
    {
      reported: true,
    }
  );

  sendResponse(true, 201, "device", newDevice, res);
});

// SEARCH DEVICES
exports.searchReportedDevices = catchAsyncErrors(async (req, res, next) => {
  const devices = await StolenDeviceModel.find();
  const imageUrl = `${req.protocol}://${req.get("host")}/public/images/`;

  if (!devices.length) {
    return next(new ErrorHandler("Devices not found", 404));
  }

  sendResponse(
    true,
    200,
    "reportedDevices",
    {
      pictureUrl: imageUrl,
      devices: devices,
    },
    res
  );
});

// DEVICE DEYAIL
exports.reportedDeviceDetail = catchAsyncErrors(async (req, res, next) => {
  const device = await StolenDeviceModel.findById(req.params.id);
  const imageUrl = `${req.protocol}://${req.get("host")}/public/images/`;

  if (!device) {
    return next(new ErrorHandler("Device not found", 404));
  }

  sendResponse(
    true,
    200,
    "reportedDevice",
    {
      pictureUrl: imageUrl,
      device: device,
    },
    res
  );
});
