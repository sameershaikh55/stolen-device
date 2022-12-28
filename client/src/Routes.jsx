import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadUser } from "./redux/action/auth";

// CUSTOMR ROUTES
import Protected from "./components/Route/ProtectedRoute";
import Public from "./components/Route/PublicRoute";

// PAGES
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Report from "./pages/Report";
import RegisterDevice from "./pages/RegisterDevice";
import Search from "./pages/Search";
import SearchResults from "./pages/SearchResults";
import DeviceDetail from "./pages/DeviceDetail";
import UserReset from "./pages/UserReset";

const AppRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <Public>
              <Login />
            </Public>
          }
        />
        <Route
          path="/password/reset/:token"
          element={
            <Public>
              <UserReset />
            </Public>
          }
        />

        <Route
          path="/"
          element={
            <Protected>
              <Home />
            </Protected>
          }
        />
        <Route
          path="/profile"
          element={
            <Protected>
              <Profile />
            </Protected>
          }
        />
        <Route
          path="/report-device"
          element={
            <Protected>
              <Report />
            </Protected>
          }
        />
        <Route
          path="/register-device"
          element={
            <Protected>
              <RegisterDevice />
            </Protected>
          }
        />
        <Route
          path="/search-device"
          element={
            <Protected>
              <Search />
            </Protected>
          }
        />
        <Route
          path="/search-results"
          element={
            <Protected>
              <SearchResults />
            </Protected>
          }
        />
        <Route
          path="/stolen-device"
          element={
            <Protected>
              <DeviceDetail />
            </Protected>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
