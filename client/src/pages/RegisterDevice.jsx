import React from "react";
import Checkbox from "../components/Checkbox";
import Input from "../components/Input";
import Textarea from "../components/Textarea";

const RegisterDevice = () => {
  return (
    <div className="home_container">
      <div className="page_container w-100">
        <div className="container-fluid w-100">
          <div className="row w-100">
            <div className="col-6 color2">
              <h1>Register my devices</h1>
              <p className="f18">
                Register a device under your profile for fast reporting should
                the device go missing
              </p>
            </div>
            <div className="col-6">
              <form className="row gy-4 form_container">
                <div className="col-6">
                  <Checkbox title="Device Type" />
                </div>
                <div className="col-6">
                  <Input label="Serial/IMEI number" />
                </div>
                <div className="col-6">
                  <Input label="Make" />
                </div>
                <div className="col-6">
                  <Input label="Model" />
                </div>
                <div className="col-12">
                  <Textarea label="List any unique identifiers" />
                </div>
                <div className="col-12">
                  <input type="file" class="form-control" id="customFile" />
                </div>
                <div>
                  <button
                    type="submit"
                    className="rounded-3 btn-lg bg_color2 rounded-3 border-0 f18 w-100 text-center color1 py-2 fw-bold"
                  >
                    Register device
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterDevice;
