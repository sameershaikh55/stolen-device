import React from "react";
import Checkbox from "../components/Checkbox";
import FormTaglines from "../components/FormTaglines";
import GoBack from "../components/GoBack";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import Layout from "../layout";

const RegisterDevice = () => {
  return (
    <Layout classname="home_container" title="Register Device">
      <div className="col-6 color2">
        <FormTaglines
          title="Register my devices"
          desc="Register a device under your profile for fast reporting should
                the device go missing"
        />
        <br />
        <GoBack />
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
    </Layout>
  );
};

export default RegisterDevice;
