import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'General Dentistry',
      description: 'Comprehensive dental examinations, cleanings, and preventive care to maintain your oral health.',
      icon: '🦷'
    },
    {
      title: 'Cosmetic Dentistry',
      description: 'Teeth whitening, veneers, and smile makeovers to enhance the appearance of your smile.',
      icon: '✨'
    },
    {
      title: 'Root Canal Treatment',
      description: 'Advanced endodontic procedures to save infected teeth and relieve pain.',
      icon: '🏥'
    },
    {
      title: 'Orthodontics',
      description: 'Braces and aligners to straighten teeth and correct bite issues for a perfect smile.',
      icon: '😁'
    },
    {
      title: 'Dental Implants',
      description: 'Permanent tooth replacement solutions that look and function like natural teeth.',
      icon: '⚕️'
    },
    {
      title: 'Pediatric Dentistry',
      description: 'Specialized dental care for children in a friendly and comfortable environment.',
      icon: '👶'
    },
    {
      title: 'Oral Surgery',
      description: 'Tooth extractions, wisdom teeth removal, and other surgical procedures.',
      icon: '🔬'
    },
    {
      title: 'Periodontics',
      description: 'Treatment of gum diseases and maintenance of healthy gums and supporting structures.',
      icon: '💚'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2 className="section-title">Our Services</h2>
        <p className="services-intro">
          We offer a comprehensive range of dental services to meet all your oral health needs
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
