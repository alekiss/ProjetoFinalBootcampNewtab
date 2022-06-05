import React from "react";

const Pagination = (props) => {
  const { onLeftClick, onRightClick } = props;

  return (
    <div className="pagination-container">
      <button onClick={onLeftClick}>
        <div className="pagination-ball"></div>
      </button>
      <div className="pagination-ball-center"></div>
      <button onClick={onRightClick}>
        <div className="pagination-ball"></div>
      </button>
    </div>
  );
};

export default Pagination;