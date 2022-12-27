import React from "react";
import Layout from "../layout";
import FormTaglines from "../components/FormTaglines";
import GoBack from "../components/GoBack";
import Table from "../components/Table";

const SearchResults = () => {
  return (
    <Layout classname="home_container" title='Search Results'>
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
          <Table />
        </div>
      </div>
    </Layout>
  );
};

export default SearchResults;
