import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import SmallLoader from "../components/SmallLoader";
import { FaUser } from "react-icons/fa";
import { MdReport } from "react-icons/md";
import edit from "../assets/icons/edit.svg";
import GoBack from "../components/GoBack";
import Layout from "../layout";
import {
  clearErrors,
  logout,
  updateProfile,
  userDevices,
} from "../redux/action/auth";
import { useDispatch, useSelector } from "react-redux";
import { PROFILE_UPDATE_RESET } from "../redux/type/auth";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  const {
    profileUpdateLoading,
    profileUpdate,
    profileUpdateError,
    user: { name, country, province, city, email, phone },
  } = useSelector((state) => state.user);
  const { registered, error, loading } = useSelector(
    (state) => state.userDevices
  );

  const [handleUpdate, setHandleUpdate] = useState({
    email: email,
    phone: phone,
  });
  const [editMode, setEditMode] = useState("");

  const handleChange = (e) => {
    setHandleUpdate({ ...handleUpdate, [e.target.name]: e.target.value });
  };

  const submitUpdate = () => {
    if (!handleUpdate[editMode]) {
      setEditMode("");
      return alert.error(
        `${editMode.toLocaleUpperCase()} Field cannot be empty`
      );
    }

    dispatch(
      updateProfile({
        [editMode]: handleUpdate[editMode],
      })
    );
  };

  useEffect(() => {
    dispatch(userDevices());
  }, []);

  useEffect(() => {
    if (profileUpdate) {
      alert.success(`${editMode.toUpperCase()} is updated!`);
      dispatch({ type: PROFILE_UPDATE_RESET });
      setEditMode("");
    }

    if (profileUpdateError) {
      alert.error(profileUpdateError);
      dispatch({ type: PROFILE_UPDATE_RESET });
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, error, profileUpdate, profileUpdateError]);

  return (
    <Layout classname="home_container" title="Profile">
      <div className="col-12 col-md-4">
        <div className="d-flex flex-column align-items-center">
          <div>
            <FaUser fontSize={150} className="color2" />
          </div>
          <div className="d-flex flex-column w-100 gap-3 text-white">
            <h2 className="text-center color2 mt-3 mb-0 mb-4"> {name} </h2>
            <p> {country} </p>
            <p>
              {city}, {province}
            </p>
            {(editMode === "email" && (
              <div className="d-flex justify-content-between gap-2 align-items-center">
                <Input
                  label="Email"
                  name="email"
                  value={handleUpdate.email}
                  onChange={(e) => handleChange(e)}
                />
                <button
                  disabled={profileUpdateLoading ? true : false}
                  onClick={submitUpdate}
                  className="px-3 h-100 rounded-3 fw600 py-2 bg_color2 color1 h-100"
                >
                  {(profileUpdateLoading && <SmallLoader />) || "Submit"}
                </button>
              </div>
            )) || (
              <p className="d-flex justify-content-between gap-2 align-items-center">
                {email}{" "}
                <img
                  onClick={() => setEditMode("email")}
                  src={edit}
                  alt=""
                  className="pointer"
                />
              </p>
            )}
            {(editMode === "phone" && (
              <div className="d-flex justify-content-between gap-2 align-items-center">
                <Input
                  label="Phone"
                  name="phone"
                  value={handleUpdate.phone}
                  onChange={(e) => handleChange(e)}
                />
                <button
                  disabled={profileUpdateLoading ? true : false}
                  onClick={submitUpdate}
                  className="px-3 h-100 rounded-3 fw600 py-2 bg_color2 color1 h-100"
                >
                  {(profileUpdateLoading && <SmallLoader />) || "Submit"}
                </button>
              </div>
            )) || (
              <p className="d-flex justify-content-between gap-2 align-items-center">
                {phone}{" "}
                <img
                  onClick={() => setEditMode("phone")}
                  src={edit}
                  alt=""
                  className="pointer"
                />
              </p>
            )}
            <button
              onClick={() => dispatch(logout())}
              className="border-0 bg-transparent color8 text-start text-primary fw-bold"
            >
              logout
            </button>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-8">
        <div className="row gy-4">
          <div className="col-12 col-md-8 mx-auto">
            <div className="d-flex justify-content-end">
              <GoBack profile />
            </div>
            <br />
            <h3 className="color1 mt-3 mb-0 bg_color2 px-2 rounded-2">
              Registered Devices
            </h3>
            <ul className="device_list d-flex flex-column gap-2 list-unstyled mt-3">
              {loading === false ? (
                (registered.length &&
                  registered.map((content, idx) => {
                    const { deviceType, model, _id, reported } = content;

                    return (
                      <li
                        key={idx}
                        className="d-flex justify-content-between align-items-center px-2"
                      >
                        <p className="color2 fw-bold">{deviceType}</p>
                        <div className="d-flex gap-4">
                          <p className="color8 align-self-center f14">
                            {model}
                          </p>
                          <div className="d-flex gap-2">
                            <button
                              disabled={reported}
                              onClick={() => navigate(`/edit-device/${_id}`)}
                              className="rounded-2"
                            >
                              <img src={edit} alt="" />
                            </button>
                            <button
                              disabled={reported}
                              onClick={() =>
                                navigate(`/report-registered-device/${_id}`)
                              }
                              className="px-2 d-flex justify-content-center align-items-center rounded-2"
                            >
                              <MdReport className="text-danger" />
                            </button>
                          </div>
                        </div>
                      </li>
                    );
                  })) || <div className="text-center text-white">no data</div>
              ) : (
                <div className="text-center text-white">loading...</div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
