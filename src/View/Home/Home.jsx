import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import style from './Home.module.css';
import img from '../../assets/perfil.png';

const Home = () => {


  return (
    <div className={style['home-container']}>
      <div className={style['home-container-childs']}>
      
        <div className={style['child-info']}>
          <div className={style['container-img']}>
            <div className={style['img']}>
              <img src={img} alt="Profile" />
            </div>
          </div>
          <div className={style['child-text']}>
            <p>
              <span className={style['hello']}>Hello there,</span> I'm
              <h1>
                <strong className={style['child-text-name']}>Matias Vincent</strong>
              </h1>
              I'm a dedicated full-stack web developer. My experience extends to both front-end and back-end development
            </p>
            <div className={style['child-container-bnt']}>
              <a
                href='https://drive.google.com/file/d/1LiJ1kKO8xZbArCB203RUapBGhWGNa5-a/view?usp=sharing' target='_blanck'
                
                className={style['child-btn-resumen']}
            
              >
                Resumen
              </a>
              <a href='https://www.linkedin.com/in/matias-vincent/' target='_blank' className={style['btn']}>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href='https://github.com/matiasvincent2002' target='_blank' className={style['btn']}>
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href='https://github.com/matiasvincent2002' target='_blank' className={style['btn']}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
