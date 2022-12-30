import React, { useEffect } from "react";
import Layout from "../layout";
import FormTaglines from "../components/FormTaglines";
import GoBack from "../components/GoBack";
import Table from "../components/Table";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { allReportedDevices, clearErrors } from "../redux/action/reportDevice";
import { useLocation } from "react-router-dom";
import { useAlert } from "react-alert";

const SearchResults = () => {
  const { search } = useLocation();
  const dispatch = useDispatch();
  const alert = useAlert();

  const { reportedDevices, error, loading } = useSelector(
    (state) => state.allReportedDevices
  );

  useEffect(() => {
    dispatch(allReportedDevices(search));
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
    <Layout classname="home_container" title="Search Results">
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
          <Table reportedDevices={reportedDevices} />
        </div>
      </div>
    </Layout>
  );
};

export default SearchResults;
