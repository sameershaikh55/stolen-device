import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../components/Input";
import Logo from "../components/Logo";
import login from "../assets/images/login.png";
import lock from "../assets/icons/lock.svg";
import Metadata from "../components/Metadata";
import { clearErrors, resetPassword } from "../redux/action/auth";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import SmallLoader from "../components/SmallLoader";

const UserReset = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const navigate = useNavigate();
  const { token } = useParams();

  const { loading, error, message } = useSelector(
    (state) => state.resetPassword
  );

  const [resetHandle, setResetHandle] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>
    setResetHandle((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  const submit = (e) => {
    e.preventDefault();
    dispatch(resetPassword({ ...resetHandle }, token));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (message) {
      alert.success(message);
      navigate("/");
    }
  }, [dispatch, alert, error, message]);

  return (
    <div className="login_container">
      <Metadata title="Reset Password" />

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
            <Input
              label="Password"
              icon={lock}
              name="password"
              value={resetHandle.password}
              onChange={(e) => handleChange(e)}
            />
            <Input
              label="Confirm Password"
              icon={lock}
              name="confirmPassword"
              value={resetHandle.confirmPassword}
              onChange={(e) => handleChange(e)}
            />

            <div className="d-flex flex-column">
              <button
                disabled={loading ? true : false}
                type="submit"
                className="rounded-3 btn-lg bg_color2 rounded-3 border-0 f18 w-100 text-center color1 py-2 fw-bold"
              >
                {loading ? <SmallLoader /> : "Submit"}
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
