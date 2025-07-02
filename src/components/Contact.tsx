import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contacto</h2>
      <div className="contact-item">
        <FaEnvelope className="contact-icon" /><span>jchinchilla1204@gmail.com</span>
      </div>
      <div className="contact-item">
        <FaPhone className="contact-icon" /><span>+57 311 775 9027</span>
      </div>
      <div className="contact-item">
        <FaLinkedin className="contact-icon" />
        <a href="https://www.linkedin.com/in/juan-jose-chinchilla-lanziano-939328283/" target="_blank" rel="noopener noreferrer">
          linkedin.com/in/juan-jose-chinchilla-lanziano-939328283/
        </a>
      </div>
    </section>
  );
}
