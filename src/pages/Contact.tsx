import React from 'react';
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <main className="contact-page" role="main">
      <div className="contact-header">
        <h1>Hubungi Saya</h1>
        <p className="intro-text">
          Punya pertanyaan, peluang kerja, atau ingin berkolaborasi? Saya akan senang mendengar dari Anda. Pilih metode kontak yang paling nyaman di bawah ini.
        </p>
      </div>

      <div className="contact-options-grid">
        {/* --- Kartu Utama: WhatsApp --- */}
        <a
          href="https://wa.me/6289672003771"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card whatsapp-card"
          aria-label="Kirim pesan WhatsApp ke Wahyu Panca Anugrah"
        >
          <FaWhatsapp className="contact-icon" />
          <div className="contact-details">
            <h3>Metode Tercepat</h3>
            <p>Chat via WhatsApp</p>
          </div>
        </a>

        {/* --- Kartu Kedua: Email --- */}
        <a
          href="mailto:pandanca7@gmail.com"
          className="contact-card"
          aria-label="Kirim email ke pandanca7@gmail.com"
        >
          <FaEnvelope className="contact-icon" />
          <div className="contact-details">
            <h3>Email</h3>
            <p>pandanca7@gmail.com</p>
          </div>
        </a>

        {/* --- Kartu Ketiga: Telepon --- */}
        <a
          href="tel:+6289672003771"
          className="contact-card"
          aria-label="Telepon ke nomor +62 896-7200-3771"
        >
          <FaPhoneAlt className="contact-icon" />
          <div className="contact-details">
            <h3>Telepon</h3>
            <p>+62 896-7200-3771</p>
          </div>
        </a>
      </div>
    </main>
  );
};

export default Contact;
