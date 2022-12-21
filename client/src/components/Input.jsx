import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Input = ({ label, icon }) => {
  const [password, setPassword] = useState(false);

  return (
    <label className="custom-field one">
      {password
        ? icon && (
            <div onClick={() => setPassword(!password)} className="lock">
              <AiOutlineEye color="#fff" fontSize={20} />
            </div>
          )
        : icon && (
            <div onClick={() => setPassword(!password)} className="lock">
              <AiOutlineEyeInvisible color="#fff" fontSize={20} />
            </div>
          )}

      <input type={icon && !password ? "password" : "text"} placeholder=" " />
      <span className="placeholder">{label}</span>
    </label>
  );
};

export default Input;
