import React from 'react';
import './Contact.css';

// Menggunakan Font Awesome via CDN
const FaWhatsapp = ({ className = '' }: { className?: string }) => (
  <i className={`fab fa-whatsapp ${className}`}></i>
);

const Contact: React.FC = () => {
  return (
    <main className="contact-page" role="main">
      <h1>Hubungi Saya</h1>
      <p>Punya pertanyaan atau tertarik untuk bekerja sama? Saya akan senang mendengar dari Anda.</p>
      
      <section aria-labelledby="whatsapp-section" className="whatsapp-container">
        <h2 id="whatsapp-section" className="visually-hidden">WhatsApp</h2>
        <a 
          href="https://wa.me/6289672003771" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="whatsapp-button"
          aria-label="Kirim pesan WhatsApp ke MOCH WAHYU HERIYANTO"
        >
          <FaWhatsapp className="whatsapp-icon" aria-hidden="true" />
          <span>Chat via WhatsApp</span>
          <p className="whatsapp-note">Klik untuk langsung terhubung ke WhatsApp saya</p>
        </a>
      </section>
      
      <section aria-labelledby="kontak-lain" className="contact-info">
        <h2 id="kontak-lain">Atau hubungi saya melalui:</h2>
        <p>
          <strong>Email:</strong> 
          <a 
            href="mailto:pandanca7@gmail.com" 
            className="email-link"
            aria-label="Kirim email ke pandanca7@gmail.com"
          >
            pandanca7@gmail.com
          </a>
        </p>
        <p>
          <strong>Telepon:</strong> 
          <a 
            href="tel:+6289672003771" 
            aria-label="Telepon ke nomor +62 896-7200-3771"
          >
            +62 896-7200-3771
          </a>
        </p>
      </section>
    </main>
  );
};

export default Contact;
