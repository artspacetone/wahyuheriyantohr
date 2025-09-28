import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import './Home.css';

const Home: React.FC = () => {
  return (
    <main role="main">
      <section className="hero-section" aria-labelledby="hero-heading" itemScope itemType="https://schema.org/Person">
        <div className="hero-content">
          <div className="profile-container">
            <div className="profile-text">
              <h1 id="hero-heading">
                Profesional HR yang Mengurangi Biaya Konflik & Meningkatkan Efisiensi Melalui Analitik Data
              </h1>
              <p className="intro-text" itemProp="description">
                Dengan 10+ tahun pengalaman di bidang Hubungan Industrial, saya mengubah proses HR yang kompleks menjadi solusi berbasis data yang efisien, menggunakan keahlian mediasi dan otomatisasi dengan Python.
              </p>
              <div className="cta-buttons">
                <Link to="/pengalaman" className="cta-primary">
                  Lihat Pengalaman Saya
                </Link>
                <a 
                  href="https://wa.me/6289672003771" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="whatsapp-btn"
                  aria-label="Hubungi saya melalui WhatsApp"
                >
                  <FaWhatsapp className="whatsapp-icon" />
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
              itemProp="image"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
