import React, { useEffect, useRef, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, registerDevice } from "../redux/action/registerDevice";
import Checkbox from "../components/Checkbox";
import FormTaglines from "../components/FormTaglines";
import GoBack from "../components/GoBack";
import SmallLoader from "../components/SmallLoader";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import Layout from "../layout";
import { REGISTER_DEVICE_RESET } from "../redux/type/registerDevice";

const RegisterDevice = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, success } = useSelector(
    (state) => state.registerDevice
  );

  const deviceImage = useRef(null);
  const [deviceImagePreview, setDeviceImagePreview] = useState("");
  const [registerDeviceHandle, setRegisterDeviceHandle] = useState({
    deviceType: "",
    serial: "",
    make: "",
    model: "",
    uniqueIdentifiers: "",
    deviceImage: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "deviceImage") {
      setRegisterDeviceHandle({
        ...registerDeviceHandle,
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
      setRegisterDeviceHandle({
        ...registerDeviceHandle,
        [e.target.name]: e.target.value,
      });
    }
  };

  const submit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("deviceType", registerDeviceHandle.deviceType);
    formData.append("serial", registerDeviceHandle.serial);
    formData.append("make", registerDeviceHandle.make);
    formData.append("model", registerDeviceHandle.model);
    formData.append(
      "uniqueIdentifiers",
      registerDeviceHandle.uniqueIdentifiers
    );
    formData.append("deviceImage", registerDeviceHandle.deviceImage);

    dispatch(registerDevice(formData));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Device Registered");
      setRegisterDeviceHandle({
        deviceType: "",
        serial: "",
        make: "",
        model: "",
        uniqueIdentifiers: "",
        deviceImage: "",
      });
      deviceImage.current.value = null;
      dispatch({ type: REGISTER_DEVICE_RESET });
    }
  }, [dispatch, alert, error, success]);

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
        <form onSubmit={submit} className="row gy-4 form_container">
          <div className="col-6">
            <Input
              label="Serial/IMEI number"
              name="serial"
              value={registerDeviceHandle.serial}
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
              state={registerDeviceHandle.deviceType}
            />
          </div>
          <div className="col-6">
            <Input
              label="Make"
              name="make"
              value={registerDeviceHandle.make}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-6">
            <Input
              label="Model"
              name="model"
              value={registerDeviceHandle.model}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-12">
            <Textarea
              label="List any unique identifiers"
              name="uniqueIdentifiers"
              value={registerDeviceHandle.uniqueIdentifiers}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-12">
            <div className="row">
              {registerDeviceHandle.deviceImage && (
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
                  (registerDeviceHandle.deviceImage && "col-10") || "col-12"
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
          <div>
            <button
              disabled={loading ? true : false}
              type="submit"
              className="rounded-3 btn-lg bg_color2 rounded-3 border-0 f18 w-100 text-center color1 py-2 fw-bold"
            >
              {(loading && <SmallLoader />) || "Register device"}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default RegisterDevice;
