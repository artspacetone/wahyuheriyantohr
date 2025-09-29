import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import './Home.css';

const Home: React.FC = () => {
  return (
    <main role="main">
      <section className="hero-section" aria-labelledby="hero-heading">
        <div className="hero-content">
          <div className="profile-container">
            <div className="profile-text">
              <h1 id="hero-heading">
                HR Professional Driving Efficiency & Reducing Conflict Through Data Analytics
              </h1>
              <p className="intro-text">
                With 10+ years of experience in Industrial Relations, I transform complex HR processes into efficient, data-driven solutions by blending expert mediation with Python-powered automation.
              </p>
              <div className="cta-buttons">
                <Link to="/experience" className="cta-primary">
                  View My Experience
                </Link>
                <a
                  href="https://wa.me/6289672003771"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn"
                  aria-label="Contact me via WhatsApp"
                >
                  <FaWhatsapp style={{ marginRight: '8px' }} />
                  <span>Chat via WhatsApp</span>
                </a>
              </div>
            </div>
            <img
              src="/profile.jpg"
              alt="MOCH. WAHYU HERIYANTO - HR Professional & Data Analyst"
              className="profile-image"
              width="280"
              height="350"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
