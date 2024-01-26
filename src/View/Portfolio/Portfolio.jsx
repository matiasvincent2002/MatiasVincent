import React from 'react';
import { Link } from 'react-router-dom';
import foodierImg from '../../assets/foodie.jpg';
import todoList from '../../assets/todoList.png';
import widgetClima from '../../assets/widget-clima.png'
import style from './Portfolio.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeploydog, faEdge, faGithub, faGitlab, faWeebly, faWeibo } from '@fortawesome/free-brands-svg-icons';



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
          <img src={todoList} alt="Foodier" className={style.projectImg} />
          </div>
       
          <div className={style.projectInfo}>
            <div>
            <h2 className={style.projectTitle}>Todo-List</h2>
            <p className={style.projectDescription}>Lista de tarea para todo los Usos.</p>
            </div>
            <ul className={style.skillsList}>
            {['JavaScript', 'React', 'CSS', 'HTML'].map((skill, index) => (
              <li key={index} className={style.skillItem}>
                {skill}
              </li>
            ))}
          </ul>
            <div className={style.projectLinks}>
              <a href='https://matiasvincent2002.github.io/TodoList/' className={style.projectLink} target="_blank" rel="noopener noreferrer">
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
          <img src={widgetClima} alt="widget-clima" className={style.projectImg} />
          </div>
       
          <div className={style.projectInfo}>
            <div>
            <h2 className={style.projectTitle}>Widget-Clima</h2>
            <p className={style.projectDescription}>Una app para saber el pronostico en todo el mundo</p>
            </div>
            <ul className={style.skillsList}>
            {['JavaScript', 'React', 'CSS', 'HTML'].map((skill, index) => (
              <li key={index} className={style.skillItem}>
                {skill}
              </li>
            ))}
          </ul>
            <div className={style.projectLinks}>
              <a href='https://matiasvincent2002.github.io/Widget-Clima/' className={style.projectLink} target="_blank" rel="noopener noreferrer">
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