import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <div>
      <nav>
  <NavLink to="/" style={{ marginRight: '10px' }}>Home</NavLink>
  <NavLink to="../src/pages/About.jsx" style={{ marginRight: '10px' }}>About</NavLink>
  <NavLink to="/projects" style={{ marginRight: '10px' }}>Projects</NavLink>
  <NavLink to="/services" style={{ marginRight: '10px' }}>Services</NavLink>
  <NavLink to="/contact" style={{ marginRight: '10px' }}>Contact</NavLink>
</nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;