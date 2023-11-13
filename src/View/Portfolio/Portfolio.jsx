import React from 'react';
import { Link } from 'react-router-dom';
import foodierImg from '../../assets/foodie.jpg';
import style from './Portfolio.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeploydog, faEdge, faGithub, faGitlab, faWeebly, faWeibo } from '@fortawesome/free-brands-svg-icons';

/*
  {
    id: 2,
    title: 'Todo',
    skills: ['JavaScript', 'React', 'CSS', 'HTML'],
    img: '',
    url: 'https://matiasvincent2002.github.io/TodoList/',
    description: 'Lista de tarea para todo los Usos.',
  },
  // Agrega más proyectos según sea necesario
*/
const Portfolio = () => {
  return (
    <div className={style.portfolio}>
        
        <div  className={style.card}>
          <div className={style.imgContainer}>
          <img src={foodierImg} alt="Foodier" className={style.projectImg} />
          </div>
       
          <div className={style.projectInfo}>
            <div>
            <h2 className={style.projectTitle}>Foodier</h2>
            <p className={style.projectDescription}>Foodier: Redefiniendo la Experiencia Gastronómica y Contribuyendo a un Mundo Sostenible</p>
            </div>
            <ul className={style.skillsList}>
            {['JavaScript', 'React', 'CSS', 'HTML', 'Sequelize', 'Express.js'].map((skill, index) => (
              <li key={index} className={style.skillItem}>
                {skill}
              </li>
            ))}
          </ul>
            <div className={style.projectLinks}>
              <a href='https://foodier.onrender.com' className={style.projectLink} target="_blank" rel="noopener noreferrer">
                Ver proyecto
              </a>
           
                <a href="" className={style.projectLink} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} /> Repositorio en GitHub
                </a>
            
    
      
            </div>
          </div>
        </div>

        <div  className={style.card}>
          <div className={style.imgContainer}>
          <img src={foodierImg} alt="Foodier" className={style.projectImg} />
          </div>
       
          <div className={style.projectInfo}>
            <div>
            <h2 className={style.projectTitle}>Foodier</h2>
            <p className={style.projectDescription}>Foodier: Redefiniendo la Experiencia Gastronómica y Contribuyendo a un Mundo Sostenible</p>
            </div>
            <ul className={style.skillsList}>
            {['JavaScript', 'React', 'CSS', 'HTML', 'Sequelize', 'Express.js'].map((skill, index) => (
              <li key={index} className={style.skillItem}>
                {skill}
              </li>
            ))}
          </ul>
            <div className={style.projectLinks}>
              <a href='https://foodier.onrender.com' className={style.projectLink} target="_blank" rel="noopener noreferrer">
                Ver proyecto
              </a>
           
                <a href="" className={style.projectLink} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} /> Repositorio en GitHub
                </a>
            
    
      
            </div>
          </div>
        </div>

        <div  className={style.card}>
          <div className={style.imgContainer}>
          <img src={foodierImg} alt="Foodier" className={style.projectImg} />
          </div>
       
          <div className={style.projectInfo}>
            <div>
            <h2 className={style.projectTitle}>Foodier</h2>
            <p className={style.projectDescription}>Foodier: Redefiniendo la Experiencia Gastronómica y Contribuyendo a un Mundo Sostenible</p>
            </div>
            <ul className={style.skillsList}>
            {['JavaScript', 'React', 'CSS', 'HTML', 'Sequelize', 'Express.js'].map((skill, index) => (
              <li key={index} className={style.skillItem}>
                {skill}
              </li>
            ))}
          </ul>
            <div className={style.projectLinks}>
              <a href='https://foodier.onrender.com' className={style.projectLink} target="_blank" rel="noopener noreferrer">
                Ver proyecto
              </a>
           
                <a href="" className={style.projectLink} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} /> Repositorio en GitHub
                </a>
            
    
      
            </div>
          </div>
        </div>

        <div  className={style.card}>
          <div className={style.imgContainer}>
          <img src={foodierImg} alt="Foodier" className={style.projectImg} />
          </div>
       
          <div className={style.projectInfo}>
            <div>
            <h2 className={style.projectTitle}>Foodier</h2>
            <p className={style.projectDescription}>Foodier: Redefiniendo la Experiencia Gastronómica y Contribuyendo a un Mundo Sostenible</p>
            </div>
            <ul className={style.skillsList}>
            {['JavaScript', 'React', 'CSS', 'HTML', 'Sequelize', 'Express.js'].map((skill, index) => (
              <li key={index} className={style.skillItem}>
                {skill}
              </li>
            ))}
          </ul>
            <div className={style.projectLinks}>
              <a href='https://foodier.onrender.com' className={style.projectLink} target="_blank" rel="noopener noreferrer">
                Ver proyecto
              </a>
           
                <a href="" className={style.projectLink} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} /> Repositorio en GitHub
                </a>
            
    
      
            </div>
          </div>
        </div>

        <div  className={style.card}>
          <div className={style.imgContainer}>
          <img src={foodierImg} alt="Foodier" className={style.projectImg} />
          </div>
       
          <div className={style.projectInfo}>
            <div>
            <h2 className={style.projectTitle}>Foodier</h2>
            <p className={style.projectDescription}>Foodier: Redefiniendo la Experiencia Gastronómica y Contribuyendo a un Mundo Sostenible</p>
            </div>
            <ul className={style.skillsList}>
            {['JavaScript', 'React', 'CSS', 'HTML', 'Sequelize', 'Express.js'].map((skill, index) => (
              <li key={index} className={style.skillItem}>
                {skill}
              </li>
            ))}
          </ul>
            <div className={style.projectLinks}>
              <a href='https://foodier.onrender.com' className={style.projectLink} target="_blank" rel="noopener noreferrer">
                Ver proyecto
              </a>
           
                <a href="" className={style.projectLink} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} /> Repositorio en GitHub
                </a>
            
    
      
            </div>
          </div>
        </div>
        <div  className={style.card}>
          <div className={style.imgContainer}>
          <img src={foodierImg} alt="Foodier" className={style.projectImg} />
          </div>
       
          <div className={style.projectInfo}>
            <div>
            <h2 className={style.projectTitle}>Foodier</h2>
            <p className={style.projectDescription}>Foodier: Redefiniendo la Experiencia Gastronómica y Contribuyendo a un Mundo Sostenible</p>
            </div>
            <ul className={style.skillsList}>
            {['JavaScript', 'React', 'CSS', 'HTML', 'Sequelize', 'Express.js'].map((skill, index) => (
              <li key={index} className={style.skillItem}>
                {skill}
              </li>
            ))}
          </ul>
            <div className={style.projectLinks}>
              <a href='https://foodier.onrender.com' className={style.projectLink} target="_blank" rel="noopener noreferrer">
                Ver proyecto
              </a>
           
                <a href="" className={style.projectLink} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} /> Repositorio en GitHub
                </a>
            
    
      
            </div>
          </div>
        </div>

        </div>

  );
};

export default Portfolio;