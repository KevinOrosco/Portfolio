// src/components/Projects.jsx
import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Proyecto 1',
    description: 'Descripción del Proyecto 1.',
    link: '#'
  },
  {
    title: 'Proyecto 2',
    description: 'Descripción del Proyecto 2.',
    link: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>Proyectos</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="btn">Ver más</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
