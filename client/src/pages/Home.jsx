import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdOutlineCreateNewFolder, MdReport } from "react-icons/md";
import { AiOutlineFileSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, logout } from "../redux/action/auth";
import Layout from "../layout";
import { useAlert } from "react-alert";

const Home = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { user, isAuthenticated, error } = useSelector((state) => state.user);

  const homeNavigation = [
    {
      title: "Register my devices",
      desc: "Register a device under your profile for fast reporting",
      icon: <MdOutlineCreateNewFolder fontSize={50} className="color3" />,
      link: "/register-device",
    },
    {
      title: "Report lost or stolen device",
      desc: "Add your lost or stolen device to our registry",
      icon: <MdReport fontSize={50} className="color3" />,
      link: "/report-device",
    },
    {
      title: "Search for a stolen device",
      desc: "Search our database of lost of stolen devices",
      icon: <AiOutlineFileSearch fontSize={50} className="color3" />,
      link: "/search-device",
    },
  ];

  const logoutFunc = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated === false) {
      alert.success("Logout successfully");
    }
  }, [dispatch, alert, isAuthenticated]);

  return (
    <Layout classname="home_container" title="Home">
      <div className="col-12 col-md-5">
        <div className="d-flex flex-column align-items-center">
          <Link to="/profile">
            <div>
              <FaUser
                fontSize={(window.screen.width < 768 && 150) || 250}
                className="color2"
              />
            </div>
            <h2 className="text-center color2 mt-3 mb-0"> {user.name} </h2>
          </Link>
          <button
            onClick={logoutFunc}
            className="text-center color2 bg-transparent border-0 color7 h-100"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="col-12 col-md-7">
        <div className="container-fluid px-4 px-md-0">
          <div className="row gy-4">
            {homeNavigation.map((content, idx) => {
              return (
                <div key={idx} className="col-12 navigation">
                  <Link to={content.link}>
                    <div className="row">
                      <div className="col-2 icon d-flex justify-content-center align-items-center">
                        {content.icon}
                      </div>
                      <div className="col-10 content d-flex flex-column justify-content-center">
                        <h2 className="mb-0 color2">{content.title}</h2>
                        <p className="color7">{content.desc}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
