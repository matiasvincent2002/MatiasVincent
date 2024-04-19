import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import img from '../../assets/perfil.png';
import '../Home/Home.css'
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-container-childs">
        <div className="child-info">
          <div className="container-img">
            <div className="img">
              <img src={img} alt="Profile" />
            </div>
          </div>
          <div className="child-text">
            <p>
              <span className="hello">Hello there,</span> I'm
              <h1>
                <strong className="child-text-name">Matias Vincent</strong>
              </h1>
              I'm a dedicated full-stack web developer. My experience extends to both front-end and back-end development
            </p>
            <div className="child-container-bnt">
              <a
                href='https://drive.google.com/file/d/1LiJ1kKO8xZbArCB203RUapBGhWGNa5-a/view?usp=sharing' target='_blanck'
                className="child-btn-resumen"
              >
                Resumen
              </a>
              <a href='https://www.linkedin.com/in/matias-vincent/' target='_blank' className="btn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href='https://github.com/matiasvincent2002' target='_blank' className="btn">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href='https://github.com/matiasvincent2002' target='_blank' className="btn">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
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
