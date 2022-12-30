import React from "react";
import { useNavigate } from "react-router-dom";

const GoBack = ({ profile }) => {
  const navigate = useNavigate();

  return (
    <button
      className="color2 border-0 bg-transparent text-decoration-underline"
      onClick={() => {
        if (profile) {
          navigate("/");
        } else {
          navigate(-1);
        }
      }}
    >
      &#8592; Go Back
    </button>
  );
};

export default GoBack;
