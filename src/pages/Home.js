import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to My Portfolio</h1>
      <p className="home-subtext">
        I’m a passionate developer focused on building clean, creative, and user-friendly applications.
      </p>
      <p className="home-quote">
        “Creating digital experiences that matter.”
      </p>
      <Link to="/about">
        <button className="home-button">Learn More About Me</button>
      </Link>
    </div>
  );
}

export default Home;