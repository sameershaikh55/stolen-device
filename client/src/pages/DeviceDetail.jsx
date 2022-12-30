import React, { useEffect } from "react";
import Layout from "../layout";
import FormTaglines from "../components/FormTaglines";
import GoBack from "../components/GoBack";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  reportedDeviceDetail,
} from "../redux/action/reportDevice";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

const DeviceDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();

  const {
    reportedDevice: {
      deviceImage,
      deviceType,
      make,
      serial,
      model,
      uniqueIdentifiers,
      country,
      details,
      stolenDate,
    },
    pictureUrl,
    error,
    loading,
  } = useSelector((state) => state.reportedDevice);

  useEffect(() => {
    dispatch(reportedDeviceDetail(id));
  }, []);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, error]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Layout classname="home_container" title="Device Detail">
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
                src={pictureUrl + deviceImage}
                alt=""
              />
            </div>
            <div className="col-12 col-md-7 color2">
              <div className="row gy-2">
                <div className="col-5 h5 fw-bold">Device type :</div>
                <div className="col-7">{deviceType}</div>
                <div className="col-5 h5 fw-bold">Make :</div>
                <div className="col-7">{make}</div>
                <div className="col-5 h5 fw-bold">Model :</div>
                <div className="col-7">{model}</div>
                <div className="col-5 h5 fw-bold">Serial/IMEI Number :</div>
                <div className="col-7">{serial}</div>
                <div className="col-5 h5 fw-bold">Date reported :</div>
                <div className="col-7">
                  {new Date(stolenDate).toDateString()}
                </div>
                <div className="col-5 h5 fw-bold">Country :</div>
                <div className="col-7">{country}</div>
                <div className="col-5 h5 fw-bold">Description :</div>
                <div className="col-7">{uniqueIdentifiers}</div>
                <div className="col-5"></div>
                <div className="col-12">
                  <div className="border border-1 border-white p-3 rounded-1">
                    {details}
                  </div>
                </div>
                <div className="col-12 d-flex justify-content-end">
                  <button
                    onClick={() => alert.success("Device Reported!")}
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
