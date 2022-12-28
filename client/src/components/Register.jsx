import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import lock from "../assets/icons/lock.svg";
import { FaRegTimesCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import { registeration, clearErrors } from "../redux/action/auth";
import Loader from "../components/Loader";

const Register = ({ register, setRegister }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const fields = [
    {
      label: "Name",
      type: "text",
      name: "name",
    },
    {
      label: "Country",
      type: "text",
      name: "country",
    },
    {
      label: "Province",
      type: "text",
      name: "province",
    },
    {
      label: "City",
      type: "text",
      name: "city",
    },
    {
      label: "Email",
      type: "text",
      name: "email",
    },
    {
      label: "Phone number",
      type: "text",
      name: "phone",
    },
    {
      label: "Password",
      name: "password",
    },
    {
      label: "Confirm Password",
      name: "cpassword",
    },
  ];
  const navigate = useNavigate();
  const [terms, setTerms] = useState(false);
  const [registerHandle, setRegisterHandle] = useState({
    name: "",
    country: "",
    province: "",
    city: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (e) => {
    setRegisterHandle({ ...registerHandle, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();

    if (registerHandle.password !== registerHandle.cpassword) {
      alert.error("Password doesn't match");
      return;
    }

    delete registerHandle.cpassword;
    dispatch(registeration(registerHandle));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      navigate("/");
    }
  }, [dispatch, alert, isAuthenticated, error]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div
      style={{ transform: (register && "scale(1)") || "scale(0)" }}
      className="register_container"
    >
      <div className="inner_register_container">
        <button
          onClick={() => setRegister(false)}
          className="cross bg-transparent border-0 p-0"
        >
          <FaRegTimesCircle />
        </button>

        <h2 className="text-center color2">Create your profile</h2>

        <form onSubmit={submit} className="form_container pt-3">
          <div className="container-fluid">
            <div className="row gy-4">
              {fields.map((content, idx) => {
                return (
                  <div key={idx} className="col-12">
                    <Input
                      label={content.label}
                      icon={
                        content.label === "Password" ||
                        content.label === "Confirm Password"
                          ? lock
                          : ""
                      }
                      name={content.name}
                      value={registerHandle[content.name]}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                );
              })}

              <div className="col-12">
                <p className="d-flex align-items-center pb-0 text-white gap-2">
                  <input
                    type="checkbox"
                    checked={terms}
                    onChange={() => setTerms(!terms)}
                  />{" "}
                  I have read and accepted the terms and conditions
                </p>
              </div>

              <div className="col-12">
                <button
                  disabled={terms === true ? false : true}
                  type="submit"
                  className="rounded-3 btn-lg bg_color2 rounded-3 border-0 f18 w-100 text-center color1 py-2 fw-bold"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
