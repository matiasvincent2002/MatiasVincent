// Lenguaje.js
import React, { useState } from "react";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./lenguaje.css";

const Lenguaje = ({ onIdiomaChange }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleIdiomaClick = (idioma) => {
    onIdiomaChange(idioma);
    setModalVisible(false);
  };

  return (
    <div>
      <div className="lenguaje" onClick={toggleModal}>
        <FontAwesomeIcon icon={faLanguage} />
      </div>
      {modalVisible && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <ul>
              <li onClick={() => handleIdiomaClick("es")}>Español</li>
              <li onClick={() => handleIdiomaClick("en")}>Inglés</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lenguaje;
