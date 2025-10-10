import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaDownload } from 'react-icons/fa';
import './Home.css';

const Home: React.FC = () => {
  return (
    <main role="main">
      <section className="hero-section" aria-labelledby="hero-heading">
        <div className="hero-content">
          <div className="profile-container">
            <div className="profile-text">
              <h1 id="hero-heading">
                Data & Analytics Professional Driving Business Performance
              </h1>
              <p className="intro-text">
                With 10+ years of experience, I leverage a strong foundation in finance and accounting to translate complex data into actionable insights and automate processes using Python and JavaScript.
              </p>

              <div className="cta-buttons">
                <Link to="/experience" className="cta-primary">
                  View My Experience
                </Link>

                <a
                  href="/CV-Moch-Wahyu-Heriyanto-EN.pdf"
                  className="cta-secondary"
                  download="CV - Moch Wahyu Heriyanto.pdf"
                  aria-label="Download my resume in PDF format"
                >
                  <FaDownload style={{ marginRight: '8px' }} />
                  Download Print-Friendly CV
                </a>

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
              alt="MOCH. WAHYU HERIYANTO - Data & Analytics Professional"
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
