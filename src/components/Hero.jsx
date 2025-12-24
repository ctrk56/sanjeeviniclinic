import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Sri Sanjeevini Dental</h1>
        <p className="hero-subtitle">
          Experience world-class dental care with our team of experienced professionals
        </p>
        <p className="hero-description">
          We provide comprehensive dental services using the latest technology and techniques 
          to ensure your smile is healthy, beautiful, and confident.
        </p>
        <button className="cta-button" onClick={scrollToContact}>
          Book an Appointment
        </button>
      </div>
    </section>
  );
};

export default Hero;
