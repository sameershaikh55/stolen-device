import React from "react";

const SelectBox = ({ title }) => {
  return (
    <div className="custom-select">
      <details>
        <summary className="radios">
          <input
            type="radio"
            name={`${title}item`}
            id="default"
            title={title}
            checked
          />
          <input
            type="radio"
            name={`${title}item`}
            id={`${title}item1`}
            title="Item 1"
          />
          <input
            type="radio"
            name={`${title}item`}
            id={`${title}item2`}
            title="Item 2"
          />
        </summary>
        <ul className="list-unstyled list">
          <li>
            <label for={`${title}item1`}>
              Item 1<span></span>
            </label>
          </li>
          <li>
            <label for={`${title}item2`}>Item 2</label>
          </li>
        </ul>
      </details>
    </div>
  );
};

export default SelectBox;
