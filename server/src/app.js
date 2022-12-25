const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

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
app.use(fileUpload());

// ROUTE IMPORT
const auth = require("./routes/auth");

// CONTROLLERS
app.use("/api", auth);

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
