import React, { useState } from "react";
import "./dropdown.scss";
import SelectIcon from "./../../assets/selectIcon.svg";

const Dropdown = ({ title, options, select, setSelect }) => {
  const [isActive, setIsActive] = useState(false);


  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        <label class="title">{title}</label>
        <label>{select}</label>
        <span>
          <img src={SelectIcon} alt="" />
        </span>
      </div>

      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelect(option);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
