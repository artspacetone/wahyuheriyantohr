import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-about">
            <div className="footer-logo">MOCH. WAHYU HERIYANTO</div>
            <p className="footer-description">
              An HR professional focused on human capital development and creating positive, productive work environments through data-driven strategies.
            </p>
            <div className="contact-info">
              <a href="mailto:pandanca7@gmail.com" className="contact-link">
                <FaEnvelope className="contact-icon" /> pandanca7@gmail.com
              </a>
              <a href="tel:+6289672003771" className="contact-link">
                <FaPhone className="contact-icon" /> +62 896-7200-3771
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-links-column">
              <h3 className="footer-links-title">Navigation</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Me</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/certificates">Certificates</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            &copy; {currentYear} MOCH. WAHYU HERIYANTO. All rights reserved.
          </div>
          <div className="social-links">
            <a href="https://linkedin.com/in/mochwahyuheriyanto" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
