import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projectList = [
    {
      title: 'FGDCHNJ Shopify Store',
      description: 'A dropshipping Shopify store selling car accessories and cleaning tools. Fully customized theme and product setup.',
      link: 'https://fgdchnj.myshopify.com/',
      image: '/shopify.jpg'
    },
    {
      title: 'Todo App',
      description: 'Task manager app with localStorage.',
      link: '#',
      image: '/todo.jpg'
    },
    {
      title: 'Weather App',
      description: 'Real-time weather app using OpenWeatherMap API.',
      link: '#',
      image: '/weather.jpg'
    }
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;