const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

// ERROR HANDLER
const errorMiddleware = require("./middleware/error");

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "src/config/config.env" });
}

// APP USE
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTE IMPORT
const auth = require("./routes/auth");
const profile = require("./routes/profile");
const registerDevice = require("./routes/registerDevice");

// CONTROLLERS
app.use("/api/auth", auth);
app.use("/api/profile", profile);
app.use("/api/device", registerDevice);

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
