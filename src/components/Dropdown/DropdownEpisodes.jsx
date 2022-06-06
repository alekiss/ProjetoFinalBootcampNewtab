import React, { useState } from "react";
import "./dropdownEpisodes.scss";
import SelectIcon from "./../../assets/selectIcon.svg";

const DropdownEpisodes = ({ title, options, select, setSelect }) => {
  const [isActive, setIsActive] = useState(false);

  const setSeason = (option) => {
    if (option === 1) {
      setSelect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    } else if (option === 2) {
      setSelect([12, 13, 14, 15, 16, 17, 18, 19, 20, 21]);
    } else if (option === 3) {
      setSelect([22, 23, 24, 25, 26, 27, 28, 29, 30, 31]);
    } else if (option === 4) {
      setSelect([32, 33, 34, 35, 36, 37, 38, 39, 40, 41]);
    } else if (option === 5) {
      setSelect([42, 43, 44, 45, 46, 47, 48, 49, 50, 51]);
    }
  };

  return (
    <div className="dropdownEpisodes">
      <div
        className="dropdownEpisodes-btn"
        onClick={(e) => setIsActive(!isActive)}
      >
        <label class="title">Temporada</label>
        <span>
          <img src={SelectIcon} alt="" />
        </span>
      </div>

      {isActive && (
        <div className="dropdownEpisodes-content">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSeason(option);
                setIsActive(false);
              }}
              className="dropdownEpisodes-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownEpisodes;
