import React from "react";
import FormTaglines from "../components/FormTaglines";
import GoBack from "../components/GoBack";
import Input from "../components/Input";
import Checkbox from "../components/Checkbox";
import Layout from "../layout";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  const submit = () => {
    navigate('/search-results');
  };

  return (
    <Layout classname="home_container">
      <div className="col-12">
        <div className="col-12 color2 d-flex align-items-start d-flex flex-column flex-md-row justify-content-md-between">
          <div>
            <FormTaglines
              title="Search for a stolen device"
              desc="Search our database of lost of stolen devices"
            />
          </div>
          <GoBack />
        </div>
        <br />
        <br />
        <div className="col-12">
          <div className="container-fluid">
            <form onSubmit={submit} className="row gy-4 form_container">
              <div className="col-6 col-md-4">
                <Input label="Make" />
              </div>
              <div className="col-6 col-md-4">
                <Input label="Model" />
              </div>
              <div className="col-6 col-md-4">
                <Checkbox title="Device Type" />
              </div>
              <div className="col-6 col-md-4">
                <Input label="Date lost/stolens" type="date" />
              </div>
              <div className="col-6 col-md-4">
                <Input label="Country" />
              </div>
              <div className="col-6 col-md-4">
                <Input label="Serial/IMEI number" />
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-lg-4 ms-auto">
                    <button
                      type="submit"
                      className="rounded-3 btn-lg bg_color2 rounded-3 border-0 f18 w-100 text-center color1 py-2 fw-bold"
                    >
                      Register device
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
