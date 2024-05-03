  import React, { useState } from 'react';
  import Modal from 'react-modal';

  import style from './About.module.css';
  import diploma from '../../assets/diploma.png';
  import './modal.css';
  import sequelize from '../../assets/icon-svg/sequelize.svg';
  import tailwind from '../../assets/icon-svg/tailwind.svg';
  import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs, FaBootstrap, FaPhp, FaPhone, FaGithub } from 'react-icons/fa';

  const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };

    return (
      <div className={style['about-container']}>
        <div className={style['about-content']}>
          <div className={style['content-container']}>
            <div className={style['text-container']}>
              <p className={style['section-title-h1']}>Sobre Mi</p>
              <p className={style['intro']}>
                ¡Hola! Soy <strong>Matias Vincent</strong>, un apasionado programador full stack con una sólida formación en programación.
              </p>
              <div className={style['about-space']}>
                <h2 className={style['section-title']}>Habilidades</h2>
                <div className={style['skills-icons']}>
                  <FaHtml5 size={50} className={style['icon']} />
                  <FaCss3 size={50} className={style['icon']} />
                  <FaJs size={50} className={style['icon']} />
                  <FaReact size={50} className={style['icon']} />
                  <FaNodeJs size={50} className={style['icon']} />
                  <FaBootstrap size={50} className={style['icon']} />
                  <FaPhp size={50} className={style['icon']} />
                  <img src={tailwind} alt='TailwindCss' className={style['about-icon-img']} />
                  <img src={sequelize} alt='sequelize'  className={style['about-icon-img']}/>
                </div>
              </div>
              <div className={style['about-space']}>
                <h2 className={style['section-title']}>Educación y Formación</h2>
                <p>
                  Mi viaje en el mundo de la programación comenzó en la secundaria técnica, la E.E.S.T N°2, donde me gradué como <em className={style['imp']}>Técnico en Programación</em>. Continué mi educación realizando un riguroso bootcamp de desarrollo web full stack llamado "SoyHenry," donde adquirí un profundo conocimiento de diversas tecnologías, incluyendo React, JavaScript, Node.js, CSS3, HTML5, Sequelize, Express.js, Bootstrap, Tailwind y más. Este programa de capacitación requirió más de 800 horas de dedicación y me otorgó el título de <em>Programador Full Stack</em>.
                </p>
                <button onClick={openModal} className={style['about-btn']}>Ver Diploma</button>
            <Modal
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              contentLabel="Diploma Modal"
              className="modal"
            >
              <img src={diploma} alt="Diploma" />
              <button onClick={closeModal} className={style['about-btn']}>Cerrar</button>
            </Modal>
              </div>
              <div className={style['about-space']}>
                <h2 className={style['section-title']}>Contacto</h2>
                <p className={style['contact-icon']}>
                  <span>
                    <FaPhone size={30} />
                  </span>
                  Teléfono: +54 9 2224515942
                </p>
                <p className={style['contact-icon']}>
                  <span>
                    <FaGithub size={30} />
                  </span>
                  GitHub: <a href="https://github.com/matiasvincent2002" target="_blank" rel="noopener noreferrer">MatiasVincent2002</a>
                </p>
              </div>
            </div>
          
          </div>
    
        </div>
      </div>
    );
  };

  export default About;
