import React, { useState } from 'react'; // Quita las llaves alrededor de React

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import img from '../../assets/perfil.png';
import '../Home/Home.css'
import Lenguaje from '../../components/lenguaje/lenguaje';
import idioma from '../../utils/languaje.json'
const Home = () => {

  const [idiomaSeleccionado, setIdiomaSeleccionado] = useState('es'); // Por defecto, selecciona español
  const handleIdiomaChange = (idioma) => {
    setIdiomaSeleccionado(idioma);
  };

  return (
    <div className="home-container">
      <Lenguaje onIdiomaChange={handleIdiomaChange} />
      <div className="home-container-childs">
        <div className="child-info">
          <div className="container-img">
            <div className="img">
              <img src={img} alt="Profile" />
            </div>
          </div>
          <div className="child-text">
            <p>
              <span className="hello">{idioma.helloMessage[idiomaSeleccionado]}</span> {idioma.nameIntro[idiomaSeleccionado]}
              <h1>
                <strong className="child-text-name">Matias Vincent</strong>
              </h1>
              {idioma.developerDescription[idiomaSeleccionado]}
            </p>
            <div className="child-container-bnt">
              <a
                href='https://drive.google.com/file/d/1LiJ1kKO8xZbArCB203RUapBGhWGNa5-a/view?usp=sharing' target='_blanck'
                className="child-btn-resumen"
              >
                {idioma.resumeButtonText[idiomaSeleccionado]}
              </a>
              {/* Otros enlaces */}
            </div>
          </div>
        </div>

        <div className="wave wave1"></div>  
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>
    </div>
  );
};

export default Home;
