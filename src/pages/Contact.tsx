import React from 'react';
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <main className="contact-page" role="main">
      <div className="contact-header">
        <h1>Contact Me</h1>
        <p className="intro-text">
          Have a question, an opportunity, or just want to collaborate? I'd love to hear from you. Please choose your preferred contact method below.
        </p>
      </div>
      <div className="contact-options-grid">
        <a
          href="https://wa.me/6289672003771"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card whatsapp-card"
          aria-label="Send a WhatsApp message to MOCH. WAHYU HERIYANTO"
        >
          <FaWhatsapp className="contact-icon" />
          <div className="contact-details">
            <h3>Fastest Method</h3>
            <p>Chat via WhatsApp</p>
          </div>
        </a>
        <a
          href="mailto:pandanca7@gmail.com"
          className="contact-card"
          aria-label="Send an email to pandanca7@gmail.com"
        >
          <FaEnvelope className="contact-icon" />
          <div className="contact-details">
            <h3>Email</h3>
            <p>pandanca7@gmail.com</p>
          </div>
        </a>
        <a
          href="tel:+6289672003771"
          className="contact-card"
          aria-label="Call +62 896-7200-3771"
        >
          <FaPhoneAlt className="contact-icon" />
          <div className="contact-details">
            <h3>Phone</h3>
            <p>+62 896-7200-3771</p>
          </div>
        </a>
      </div>
    </main>
  );
};

export default Contact;
