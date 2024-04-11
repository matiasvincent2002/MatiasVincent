// Portfolio.js
import React from 'react';
import Card from '../Portfolio/Card';
import projectsData from '../../utils/proyectosData.json';
import style from './Portfolio.module.css';

const Portfolio = () => {
  return (
    <div className={style.portfolio}>
      {projectsData.map(project => (
        <Card key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Portfolio;