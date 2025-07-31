import React from 'react';
import '../styles/Services.css';

function Services() {
  const serviceList = [
    'Web Design and Development',
    'Responsive Frontend with React',
    'Basic Backend API Integration',
    'Portfolio & Resume Website Creation'
  ];

  return (
    <div className="services-container">
      <h1 className="services-title">Services</h1>
      <div className="services-grid">
        {serviceList.map((service, index) => (
          <div key={index} className="service-card">
            <p>{service}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;