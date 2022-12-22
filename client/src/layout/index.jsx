import React from "react";

const Layout = ({ children, classname }) => {
  return (
    <div className={classname}>
      <div className="page_container w-100">
        <div className="container-fluid">
          <div className="row gy-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
