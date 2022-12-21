import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, []);

  return <div></div>;
};

export default Home;
