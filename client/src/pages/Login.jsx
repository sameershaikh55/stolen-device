import React, { useState } from "react";
import login from "../assets/images/login.png";
import lock from "../assets/icons/lock.svg";
import Input from "../components/Input";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [forget, setForget] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    navigate("/");
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
            <p className="text-white mt-3 f14">
              Login or register to report lost/stolen devices or check if the
              device you are buying online is stolen.
            </p>
          </div>

          <div className="d-flex flex-column">
            {forget && (
              <div className="d-flex justify-content-start">
                <button
                  onClick={() => setForget(false)}
                  className="bg-transparent text-white text-start border-0 fw600 p-0 h-100"
                >
                  &#8592; Go back
                </button>
              </div>
            )}

            <Input label="Email Address" />

            {!forget && (
              <div>
                <Input label="Password" icon={lock} />

                <div className="d-flex justify-content-end">
                  <button
                    onClick={() => setForget(true)}
                    className="bg-transparent opacity-75 border-0 p-0 text-white h-100 f14"
                  >
                    Forgot password?
                  </button>
                </div>
              </div>
            )}

            <div className="d-flex flex-column">
              <button
                type="submit"
                className="rounded-3 btn-lg bg_color2 rounded-3 border-0 f18 w-100 text-center color1 py-2 fw-bold"
              >
                {(forget && "Submit") || "Login"}
              </button>

              <div className="d-flex justify-content-center f14 gap-2">
                <p className="opacity-75 p-0 text-white h-100">
                  Don't have an account?
                </p>
                <button className="bg-transparent opacity-75 border-0 p-0 text-white h-100">
                  Register here!
                </button>
              </div>

              {!forget && (
                <p className="text-white f14">
                  Recently lost a Digital Camera? Buying a used Laptop online?
                  Picked up an iPhone on the street?
                  <br />
                  <br />
                  Findr can help you create a record of your lost or stolen
                  devices and allow you to check if that device you are buying
                  online has been reported stolen
                </p>
              )}
            </div>
          </div>

          <p className="text-white f14">@2022 - All rights reserved</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
