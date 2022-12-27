const sharp = require("sharp");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const RegisterDevicesModel = require("../models/registerDevices");
const sendResponse = require("../utils/sendResponse");
const path = require("path");
const fs = require("fs");

// REGISTER DEVICES
exports.registerDevice = catchAsyncErrors(async (req, res, next) => {
  console.log(req.body);
  console.log(req.file);

  const imgPath = path.resolve(
    __dirname,
    "../../" + "public/images",
    req.file.filename
  );

  await sharp(imgPath)
    .resize({ width: 500, height: 300 })
    .png()
    .toFile(
      path.resolve(__dirname, "../../" + "public/images", req.file.originalname)
    );

  fs.unlinkSync(imgPath);
  res.status(201).send("Image uploaded succesfully");
});
