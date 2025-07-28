import React from 'react';
import '../styles/About.css';
import logo from '../assets/logo.jpg';  

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>

      <div className="about-content">
        <div className="about-text">
          <p>
            Hi! I’m <strong>Howard Liu</strong>, a passionate developer who loves building modern, efficient, and user-friendly web applications.
            I enjoy learning new technologies and applying them to real-world projects.
          </p>

          <h2>Skills</h2>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React.js, Node.js, Express</li>
            <li>MongoDB, SQL</li>
            <li>Git & GitHub</li>
          </ul>

          <h2>Resume</h2>
          <a href="/resume.pdf" download className="resume-button">
            Download My Resume
          </a>
        </div>

        <img src={logo} alt="Profile" className="about-image" /> 
      </div>
    </div>
  );
}

export default About;