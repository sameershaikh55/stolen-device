import React from "react";

const SelectBox = ({ title, name, options, onchange, state }) => {
  return (
    <div className="custom-select">
      <details>
        <summary className="radios">
          <input
            type="radio"
            title={(state === "" && title) || state}
            checked
            readOnly
          />
        </summary>
        <ul className="list-unstyled list">
          {options.map((content, idx) => {
            return (
              <li key={idx}>
                <label
                  onClick={() =>
                    onchange({
                      target: {
                        name: name,
                        value: content,
                      },
                    })
                  }
                  htmlFor={content}
                >
                  {content}
                </label>
              </li>
            );
          })}
        </ul>
      </details>
    </div>
  );
};

export default SelectBox;
