import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    setShowSuccess(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact Us</h2>
        <p className="contact-intro">
          Get in touch with us to schedule an appointment or for any inquiries
        </p>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Visit Us</h3>
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h4>Address</h4>
                <p>Sri Sanjeevini Dental Clinic<br />
                [Your Clinic Address]<br />
                [City, State, PIN]</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📞</div>
              <div>
                <h4>Phone</h4>
                <p>+91 [Your Phone Number]</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div>
                <h4>Email</h4>
                <p>info@srisanjeevinidental.in</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">🕐</div>
              <div>
                <h4>Working Hours</h4>
                <p>Monday - Saturday: 9:00 AM - 8:00 PM<br />
                Sunday: 10:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h3>Send us a Message</h3>
            {showSuccess && (
              <div className="success-message">
                Thank you for your message! We will get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
