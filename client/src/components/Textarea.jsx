import React from "react";

const Textarea = ({ label }) => {
  return (
    <div className="textarea_container">
      <label>{label}</label>
      <textarea className="w-100" rows="5"></textarea>
    </div>
  );
};

export default Textarea;
