
// Card.js
import React from 'react';
import style from './Portfolio.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Card = ({ project }) => {

  return (
    <div className={style.card}>
      <div className={style.imgContainer}>
        <img src={project.image} alt={project.title}/>
      </div>
      <div className={style.projectInfo}>
        <div>
          <h2 >{ project.title}</h2>
          <p className={style.projectDescription}>{project.description}</p>
        </div>
        <ul className={style.skillsList}>
          {project.skills.map((skill, index) => (
            <li key={index} className={style.skillItem}>
              {skill}
            </li>
          ))}
        </ul>
        <div className={style.projectLinks}>
          <a href={project.demoLink} className={style.projectLink} target="_blank" rel="noopener noreferrer">
            Ver proyecto
          </a>
          <a href={project.githubRepo} className={style.projectLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} /> Repositorio en GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;