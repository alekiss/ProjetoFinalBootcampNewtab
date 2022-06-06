import React from "react";
import Close from "./../../assets/close.svg";
import "./modal.scss";

const Modal = ({ closeModal, name, image, status, species, gender, firstApparition, lastApparition }) => {
  return (
    <div className="modal-container">
      <div className="modal-box">
        <div className="modal-close">
          <button onClick={() => closeModal(false)}>
            <img src={Close} alt="Fechar" />
          </button>
        </div>
        <div className="modal-content">
          <div className="modal-image">
            <img src={image} />
          </div>
          <div className="modal-information">
            <section>
              <h1>{name}</h1>
              <div className="modal-state">
                <div className={status}></div>- {species}
              </div>
            </section>
            <section>
              <p className="title">Gênero: </p>
              <p>{gender}</p>
            </section>
            <section>
              <p className="title">Primeira aparição:</p>
              <p>{firstApparition}</p>
            </section>
            <section>
              <p className="title">Última aparição:</p>
              <p>{lastApparition}</p>
            </section>
          </div>
        </div>
        <div className="modal-characters">
          <p>Personagens Relacionados</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
