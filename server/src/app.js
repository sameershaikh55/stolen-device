const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

// ERROR HANDLER
const errorMiddleware = require("./middleware/error");

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "src/config/config.env" });
}

// APP USE
app.use(
  "/public/images",
  express.static(path.resolve(__dirname, "../" + "public/images"))
);
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// ROUTE IMPORT
const auth = require("./routes/auth");
const profile = require("./routes/profile");
const registerDevice = require("./routes/registerDevice");
const stolenDevice = require("./routes/stolenDevice");

// CONTROLLERS
app.use("/api/auth", auth);
app.use("/api/profile", profile);
app.use("/api/device", registerDevice);
app.use("/api/device", stolenDevice);

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
