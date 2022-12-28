import React from "react";
import Loader from "../Loader";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Public = ({ children }) => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);

  if (loading === false) {
    if (isAuthenticated) {
      return <Navigate to="/" replace />;
    }

    return children;
  } else {
    return <Loader />;
  }
};

export default Public;
