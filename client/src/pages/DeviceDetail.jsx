import React from "react";
import Layout from "../layout";
import FormTaglines from "../components/FormTaglines";
import GoBack from "../components/GoBack";

const DeviceDetail = () => {
  return (
    <Layout classname="home_container">
      <div className="col-12">
        <div className="col-12 color2 d-flex align-items-start d-flex flex-column flex-md-row justify-content-md-between">
          <div>
            <FormTaglines
              title="Search for a stolen device"
              desc="The devices below matched your search"
            />
          </div>
          <GoBack />
        </div>
        <br />
        <br />
        <div className="col-12">
          <div className="row gy-4">
            <div className="col-12 col-md-5">
              <img
                className="w-100 rounded-1"
                src="https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1481&q=80"
                alt=""
              />
            </div>
            <div className="col-12 col-md-7 color2">
              <div className="row gy-2">
                <div className="col-5 h5 fw-bold">Device type :</div>
                <div className="col-7">Smartphone</div>
                <div className="col-5 h5 fw-bold">Make :</div>
                <div className="col-7">Samsung</div>
                <div className="col-5 h5 fw-bold">Model :</div>
                <div className="col-7">Note 10</div>
                <div className="col-5 h5 fw-bold">Serial/IMEI Number :</div>
                <div className="col-7">SMSNG36912</div>
                <div className="col-5 h5 fw-bold">Date reported :</div>
                <div className="col-7">23 August 2022</div>
                <div className="col-5 h5 fw-bold">Country :</div>
                <div className="col-7">South Africa</div>
                <div className="col-5 h5 fw-bold">Description :</div>
                <div className="col-7">
                  The device was stolen at McDonalds in JHB CBD. It has a small
                  crack on the top left of the screen, blue in color and the
                  back is smashed
                </div>
                <div className="col-5"></div>
                <div className="col-12">
                  <div className="border border-1 border-white p-3 rounded-1">
                    Device is being sold on Facebook url
                    https://www.facebook.com/marketplace/item/1111111
                  </div>
                </div>
                <div className="col-12 d-flex justify-content-end">
                  <button
                    type="submit"
                    className="rounded-3 btn-lg bg_color2 rounded-3 border-0 f18 text-center color1 py-2 fw-bold px-3"
                  >
                    Report device
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DeviceDetail;
