import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Login from "./pages/Login";
import Home from "./pages/Home";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
