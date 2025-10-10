import React, { useState } from 'react';
import './Certificates.css';

const certificates = [
  {
    title: 'Bachelor\'s Degree in Psychology',
    issuer: 'Universitas Muhammadiyah Prof. Dr. Hamka',
    year: '2011',
    imageUrl: '/certificates/ijazah-sarjana.jpg'
  },
  {
    title: 'Academic Transcript - Page 1',
    issuer: 'Universitas Muhammadiyah Prof. Dr. Hamka',
    year: '2011',
    imageUrl: '/certificates/transkrip-nilai-1.jpg'
  },
  {
    title: 'Academic Transcript - Page 2',
    issuer: 'Universitas Muhammadiyah Prof. Dr. Hamka',
    year: '2011',
    imageUrl: '/certificates/transkrip-nilai-2.jpg'
  },
  {
    title: 'Python for Data Science Certificate',
    issuer: 'Online Learning Platform',
    year: '2023',
    imageUrl: '/certificates/sertifikat-python.jpg'
  },
];

const Certificates: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>('');

  const openModal = (imageUrl: string, title: string) => {
    setSelectedImage(imageUrl);
    setSelectedTitle(title);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedTitle('');
  };

  return (
    <div className="certificates-page">
      <h1>Certificates & Credentials</h1>
      <p className="page-intro">Below are the academic and professional credentials I have earned.</p>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div
            className="certificate-card"
            key={index}
            onClick={() => openModal(cert.imageUrl, cert.title)}
          >
            <div className="certificate-image-container">
              <img
                src={cert.imageUrl}
                alt={`Certificate: ${cert.title}`}
                className="certificate-image"
                loading="lazy"
                width={300}
                height={200}
                decoding="async"
              />
            </div>
            <div className="certificate-info">
              <h3>{cert.title}</h3>
              <p>{cert.issuer} - {cert.year}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for displaying full-size image */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <h3 className="modal-title">{selectedTitle}</h3>
            <div className="modal-image-container">
              <img
                src={selectedImage}
                alt={`Full view: ${selectedTitle}`}
                className="modal-image"
                loading="eager"
                decoding="sync"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
