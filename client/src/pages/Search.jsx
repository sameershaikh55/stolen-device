import React, { useState } from "react";
import FormTaglines from "../components/FormTaglines";
import GoBack from "../components/GoBack";
import Input from "../components/Input";
import Checkbox from "../components/Checkbox";
import Layout from "../layout";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  const [searchHandle, setSearchHandle] = useState({
    make: "",
    model: "",
    deviceType: "",
    stolenDate: "",
    country: "",
    serial: "",
  });

  const handleChange = (e) => {
    setSearchHandle({
      ...searchHandle,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();

    const { make, model, deviceType, stolenDate, country, serial } =
      searchHandle;

    navigate(
      `/search-results?make=${make}&model=${model}&deviceType=${deviceType}&stolenDate=${stolenDate}&country=${country}&serial=${serial}`
    );
  };

  return (
    <Layout classname="home_container" title="Search">
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
                <Input
                  label="Make"
                  name="make"
                  value={searchHandle.make}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="col-6 col-md-4">
                <Input
                  label="Model"
                  name="model"
                  value={searchHandle.model}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="col-6 col-md-4">
                <Checkbox
                  title="Device Type"
                  name="deviceType"
                  options={[
                    "Laptop",
                    "Digital Camera",
                    "Smartphone",
                    "Console",
                    "Tablet",
                    "Other",
                  ]}
                  onchange={(e) => handleChange(e)}
                  state={searchHandle.deviceType}
                />
              </div>
              <div className="col-6 col-md-4">
                <Input
                  label="Date lost/stolens"
                  type="date"
                  name="stolenDate"
                  value={searchHandle.stolenDate}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="col-6 col-md-4">
                <Input
                  label="Country"
                  name="country"
                  value={searchHandle.country}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="col-6 col-md-4">
                <Input
                  label="Serial/IMEI number"
                  name="serial"
                  value={searchHandle.serial}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-lg-4 ms-auto">
                    <button
                      type="submit"
                      className="rounded-3 btn-lg bg_color2 rounded-3 border-0 f18 w-100 text-center color1 py-2 fw-bold"
                    >
                      Search
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
