import React from "react";
import Input from "../components/Input";
import lock from "../assets/icons/lock.svg";
import { FaRegTimesCircle } from "react-icons/fa";

const Register = ({ register, setRegister }) => {
  const fields = [
    {
      label: "Name",
      type: "text",
    },
    {
      label: "Country",
      type: "text",
    },
    {
      label: "Province",
      type: "text",
    },
    {
      label: "City",
      type: "text",
    },
    {
      label: "Email",
      type: "text",
    },
    {
      label: "Phone number",
      type: "text",
    },
    {
      label: "Password",
    },
    {
      label: "Confirm Password",
    },
  ];

  const submit = () => {};

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
                    />
                  </div>
                );
              })}

              <div className="col-12">
                <p className="d-flex align-items-center pb-0 text-white gap-2">
                  <input type="checkbox" name="" id="" /> I have read and
                  accepted the terms and conditions
                </p>
              </div>

              <div className="col-12">
                <button className="rounded-3 btn-lg bg_color2 rounded-3 border-0 f18 w-100 text-center color1 py-2 fw-bold">
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
