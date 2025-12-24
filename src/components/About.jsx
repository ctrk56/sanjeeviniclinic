import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Your Trusted Dental Care Partner</h3>
            <p>
              At Sri Sanjeevini Dental, we are committed to providing exceptional dental care 
              in a comfortable and welcoming environment. With years of experience and a 
              passion for dentistry, our team of skilled professionals is dedicated to helping 
              you achieve and maintain optimal oral health.
            </p>
            <p>
              We believe that every patient deserves personalized attention and the highest 
              quality of care. Our state-of-the-art facility is equipped with the latest 
              technology to ensure accurate diagnoses and effective treatments.
            </p>
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">✓</div>
                <div className="feature-text">
                  <h4>Experienced Team</h4>
                  <p>Highly qualified and caring dental professionals</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">✓</div>
                <div className="feature-text">
                  <h4>Modern Technology</h4>
                  <p>Latest equipment for precise and comfortable treatment</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">✓</div>
                <div className="feature-text">
                  <h4>Patient-Centered Care</h4>
                  <p>Personalized treatment plans for every patient</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
