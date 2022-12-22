import React from "react";
import Checkbox from "../components/Checkbox";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import GoBack from "../components/GoBack";
import FormTaglines from "../components/FormTaglines";
import Layout from "../layout";

const Report = () => {
  return (
    <Layout classname="home_container">
      <div className="col-6 color2">
        <FormTaglines
          title="Add your lost or stolen device to our registry"
          desc="Add your lost or stolen device under our registry"
        />
        <br />
        <GoBack />
      </div>
      <div className="col-6">
        <form className="row gy-4 form_container">
          <div className="col-6">
            <Checkbox title="Lost/Stolen" />
          </div>
          <div className="col-6">
            <Input label="Date lost/stolens" type="date" />
          </div>
          <div className="col-6">
            <Input label="Serial/IMEI number" />
          </div>
          <div className="col-6">
            <Checkbox title="Device Type" />
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
          <div className="col-12">
            <Input label="Country" />
          </div>
          <div className="col-6">
            <Input label="City" />
          </div>
          <div className="col-6">
            <Input label="Province" />
          </div>
          <div className="col-12">
            <Textarea label="Details and condition" />
          </div>
          <div>
            <button
              type="submit"
              className="rounded-3 btn-lg bg_color2 rounded-3 border-0 f18 w-100 text-center color1 py-2 fw-bold"
            >
              Report device
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Report;
