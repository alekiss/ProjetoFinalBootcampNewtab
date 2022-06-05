import React from "react";
import "./pagination.scss"

const Pagination = (prev, next, onPrevious, onHandleNext) => {

  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onHandleNext();
  };

  return (
    <nav className="pagination">
      <ul>
        {prev ? (
          <li>
            <button onClick={handlePrevious}>Previous</button>
          </li>
        ) : null}
        {next ? (
          <li>
            <button onClick={handleNext}>Next</button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Pagination;
