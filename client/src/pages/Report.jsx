import React, { useEffect, useRef, useState } from "react";
import Checkbox from "../components/Checkbox";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import GoBack from "../components/GoBack";
import FormTaglines from "../components/FormTaglines";
import Layout from "../layout";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, reportDevice } from "../redux/action/reportDevice";
import { REPORT_DEVICE_RESET } from "../redux/type/reportDevice";
import SmallLoader from "../components/SmallLoader";

const Report = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, success } = useSelector(
    (state) => state.reportDevice
  );

  const deviceImage = useRef(null);
  const [deviceImagePreview, setDeviceImagePreview] = useState("");
  const [reportDeviceHandle, setReportDeviceHandle] = useState({
    type: "",
    stolenDate: "",
    serial: "",
    deviceType: "",
    make: "",
    model: "",
    uniqueIdentifiers: "",
    deviceImage: "",
    country: "",
    city: "",
    province: "",
    details: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "deviceImage") {
      setReportDeviceHandle({
        ...reportDeviceHandle,
        deviceImage: e.target.files[0],
      });

      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setDeviceImagePreview(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setReportDeviceHandle({
        ...reportDeviceHandle,
        [e.target.name]: e.target.value,
      });
    }
  };

  const submit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("type", reportDeviceHandle.type);
    formData.append("stolenDate", reportDeviceHandle.stolenDate);
    formData.append("serial", reportDeviceHandle.serial);
    formData.append("deviceType", reportDeviceHandle.deviceType);
    formData.append("make", reportDeviceHandle.make);
    formData.append("model", reportDeviceHandle.model);
    formData.append("uniqueIdentifiers", reportDeviceHandle.uniqueIdentifiers);
    formData.append("deviceImage", reportDeviceHandle.deviceImage);
    formData.append("country", reportDeviceHandle.country);
    formData.append("city", reportDeviceHandle.city);
    formData.append("province", reportDeviceHandle.province);
    formData.append("details", reportDeviceHandle.details);

    dispatch(reportDevice(formData));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Device Reported");
      setReportDeviceHandle({
        type: "",
        stolenDate: "",
        serial: "",
        deviceType: "",
        make: "",
        model: "",
        uniqueIdentifiers: "",
        deviceImage: "",
        country: "",
        city: "",
        province: "",
        details: "",
      });
      deviceImage.current.value = null;
      dispatch({ type: REPORT_DEVICE_RESET });
    }
  }, [dispatch, alert, error, success]);

  return (
    <Layout classname="home_container" title="Report Device">
      <div className="col-6 color2">
        <FormTaglines
          title="Add your lost or stolen device to our registry"
          desc="Add your lost or stolen device under our registry"
        />
        <br />
        <GoBack />
      </div>
      <div className="col-6">
        <form onSubmit={submit} className="row gy-4 form_container">
          <div className="col-6">
            <Checkbox
              title="Lost/Stolen"
              name="type"
              options={["lost", "stolen"]}
              onchange={(e) => handleChange(e)}
              state={reportDeviceHandle.type}
            />
          </div>
          <div className="col-6">
            <Input
              label="Date lost/stolens"
              type="date"
              name="stolenDate"
              value={reportDeviceHandle.stolenDate}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-6">
            <Input
              label="Serial/IMEI number"
              name="serial"
              value={reportDeviceHandle.serial}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-6">
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
              state={reportDeviceHandle.deviceType}
            />
          </div>
          <div className="col-6">
            <Input
              label="Make"
              name="make"
              value={reportDeviceHandle.make}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-6">
            <Input
              label="Model"
              name="model"
              value={reportDeviceHandle.model}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-12">
            <Textarea
              label="List any unique identifiers"
              name="uniqueIdentifiers"
              value={reportDeviceHandle.uniqueIdentifiers}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-12">
            <div className="row">
              {reportDeviceHandle.deviceImage && (
                <div className="col-2">
                  <img
                    className="w-100"
                    src={deviceImagePreview}
                    alt="deviceImage"
                  />
                </div>
              )}
              <div
                className={`${
                  (reportDeviceHandle.deviceImage && "col-10") || "col-12"
                }`}
              >
                <input
                  ref={deviceImage}
                  type="file"
                  className="form-control"
                  id="customFile"
                  accept="image/*"
                  name="deviceImage"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
          </div>
          <div className="col-12">
            <Input
              label="Country"
              name="country"
              value={reportDeviceHandle.country}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-6">
            <Input
              label="City"
              name="city"
              value={reportDeviceHandle.city}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-6">
            <Input
              label="Province"
              name="province"
              value={reportDeviceHandle.province}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-12">
            <Textarea
              label="Details and condition"
              name="details"
              value={reportDeviceHandle.details}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <button
              disabled={loading ? true : false}
              type="submit"
              className="rounded-3 btn-lg bg_color2 rounded-3 border-0 f18 w-100 text-center color1 py-2 fw-bold"
            >
              {(loading && <SmallLoader />) || "Report device"}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Report;
