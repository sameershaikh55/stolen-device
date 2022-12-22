import React from "react";
import { FaUser } from "react-icons/fa";
import { MdReport } from "react-icons/md";
import edit from "../assets/icons/edit.svg";
import GoBack from "../components/GoBack";
import Layout from "../layout";

const Profile = () => {
  return (
    <Layout classname="home_container">
      <div className="col-12 col-md-4">
        <div className="d-flex flex-column align-items-center">
          <div>
            <FaUser fontSize={150} className="color2" />
          </div>
          <div className="d-flex flex-column w-100 gap-3 text-white">
            <h2 className="text-center color2 mt-3 mb-0 mb-4">John Smith</h2>
            <p>South Africa</p>
            <p>Gauteng</p>
            <p className="d-flex justify-content-between gap-2 align-items-center">
              J****H@gmail.com <img src={edit} alt="" />
            </p>
            <p className="d-flex justify-content-between gap-2 align-items-center">
              083****001 <img src={edit} alt="" />
            </p>
            <button className="border-0 bg-transparent color8 text-start text-primary fw-bold">
              logout
            </button>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-8">
        <div className="row gy-4">
          <div className="col-12 col-md-8 mx-auto">
            <div className="d-flex justify-content-end">
              <GoBack />
            </div>
            <br />
            <h3 className="color1 mt-3 mb-0 bg_color2 px-2 rounded-2">
              Registered Devices
            </h3>
            <ul className="d-flex flex-column gap-2 list-unstyled mt-3">
              {[1, 1, 1, 1, 1, 1, 1].map(() => {
                return (
                  <li className="d-flex justify-content-between align-items-center px-2">
                    <p className="color2 fw-bold">HP Omen</p>
                    <div className="d-flex gap-4">
                      <p className="color8 align-self-center f14">HP086420</p>
                      <div className="d-flex gap-2">
                        <button className="rounded-2">
                          <img src={edit} alt="" />
                        </button>
                        <button className="px-2 d-flex justify-content-center align-items-center rounded-2">
                          <MdReport className="text-danger" />
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
