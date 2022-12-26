import React from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Logo from "../components/Logo";
import login from "../assets/images/login.png";
import lock from "../assets/icons/lock.svg";

const UserReset = () => {
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="login_container">
      <div className="login-right">
        <h1 className="display-3">Report and Check Stolen Devices</h1>
        <img src={login} alt="" />
      </div>
      <div className="login-left">
        <form onSubmit={submit} className="inner-left d-flex flex-column">
          <div>
            <Logo />
            <p className="text-white mt-3">change your password here</p>
          </div>

          <div className="d-flex flex-column">
            <Input label="Password" icon={lock} />
            <Input label="Confirm Password" icon={lock} />

            <div className="d-flex flex-column">
              <button
                type="submit"
                className="rounded-3 btn-lg bg_color2 rounded-3 border-0 f18 w-100 text-center color1 py-2 fw-bold"
              >
                Submit
              </button>
            </div>
          </div>

          <p className="text-white f14">@2022 - All rights reserved</p>
        </form>
      </div>
    </div>
  );
};

export default UserReset;
