import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// Menggunakan Font Awesome via CDN
const FaWhatsapp = ({ className = '' }: { className?: string }) => (
  <i className={`fab fa-whatsapp ${className}`}></i>
);

const Home: React.FC = () => {
  return (
    <main className="home-page" role="main">
      <section className="hero-section" aria-labelledby="hero-heading" itemScope itemType="https://schema.org/Person">
        <div className="hero-content">
          <div className="profile-container">
            <div className="profile-text">
              <h1 id="hero-heading">
                Membangun Lingkungan Kerja yang Harmonis dan Produktif Melalui Pendekatan HR Berbasis Data.
              </h1>
              <p itemProp="description">
                Saya adalah seorang profesional Sumber Daya Manusia dengan spesialisasi di bidang Hubungan Industrial dan Analitik SDM. 
                Selama lebih dari 10 tahun, saya telah membantu perusahaan mengurangi konflik, meningkatkan retensi karyawan, 
                dan mengoptimalkan proses HR melalui mediasi yang empatik dan otomatisasi yang cerdas.
              </p>
            </div>
            <div className="profile-image">
              <img 
                src="/profile.jpg" 
                alt="MOCH WAHYU HERIYANTO - HR Professional & Web Developer" 
                className="profile-photo"
                loading="lazy"
                width="300"
                height="400"
                decoding="async"
                itemProp="image"
              />
            </div>
          </div>
          <div className="cta-buttons">
            <Link 
              to="/portfolio" 
              className="cta-primary"
              aria-label="Lihat portofolio proyek unggulan saya"
            >
              Lihat Proyek Unggulan Saya
            </Link>
            <a 
              href="https://wa.me/6289672003771" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-whatsapp"
              aria-label="Hubungi saya melalui WhatsApp"
            >
              <FaWhatsapp className="whatsapp-icon" aria-hidden="true" />
              <span>Chat via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
