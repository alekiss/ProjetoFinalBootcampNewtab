import React, { useState } from "react";
import Modal from "../ModalCharacters/Modal";
import "./searchCharacters.scss";

const SearchCharacters = ({ name, index, image, status, species, gender }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((e) => {
      return !e;
    });
  };

  return (
    <div className="searchCharacters">
      <div
        key={index}
        className="searchCharacters__contant"
        onClick={openModal}
      >
        <div className="searchCharacters__image">
          <img src={image} alt="" />
        </div>
        <div className="searchCharacters__information">
          <h1>{name}</h1>
          <div className="searchCharacters__state">
            <div className={status}></div>- {species}
          </div>
          <p>Primeira aparição: {}</p>
          <p>Última aparição: {}</p>
        </div>
      </div>

      {showModal && (
        <Modal
          closeModal={setShowModal}
          name={name}
          image={image}
          status={status}
          species={species}
          gender={gender}
        />
      )}
    </div>
  );
};

export default SearchCharacters;
