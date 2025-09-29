import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-about" itemScope itemType="https://schema.org/Person">
            <div className="footer-logo" itemProp="name">MOCH. WAHYU HERIYANTO</div>
            <p className="footer-description" itemProp="description">
              An HR professional focused on human resource development and experienced in creating positive and productive work environments.
            </p>
            <div className="contact-info">
              <a href="mailto:pandanca7@gmail.com" className="contact-link" itemProp="email">
                <FaEnvelope className="contact-icon" /> pandanca7@gmail.com
              </a>
              <a href="tel:+6289672003771" className="contact-link" itemProp="telephone">
                <FaPhone className="contact-icon" /> +62 896 7200 3771
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

            <div className="footer-links-column">
              <h3 className="footer-links-title">Quick Links</h3>
              <ul>
                <li><a href="#services">Services</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#privacy-policy">Privacy Policy</a></li>
                <li><a href="#terms-conditions">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            &copy; {currentYear} MOCH. WAHYU HERIYANTO. All rights reserved.
          </div>

          <div className="social-links">
            <a
              href="https://linkedin.com/in/wahyupanca"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
              itemProp="sameAs"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/wahyupanca"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
              itemProp="sameAs"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/wahyupanca"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Twitter"
              itemProp="sameAs"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
