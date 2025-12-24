import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Sri Sanjeevini Dental</h3>
            <p>Your trusted partner for comprehensive dental care</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>📞 +91 [Your Phone Number]</p>
            <p>✉️ info@srisanjeevinidental.in</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Sri Sanjeevini Dental. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
