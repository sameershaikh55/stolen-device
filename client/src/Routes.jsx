import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Report from "./pages/Report";
import RegisterDevice from "./pages/RegisterDevice";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/report-device" element={<Report />} />
        <Route path="/register-device" element={<RegisterDevice />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
