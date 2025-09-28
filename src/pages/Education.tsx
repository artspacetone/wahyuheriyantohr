import React from 'react';
import './Education.css';

const Education: React.FC = () => {
  return (
    <div className="education-page">
      <h1>Education</h1>
      <div className="education-card">
        <h2>Bachelor of Psychology (S.Psi)</h2>
        <h3>Universitas Muhammadiyah Prof. Dr. Hamka, Jakarta</h3>
        <p className="graduation-year">Graduated 2011</p>
        <p className="gpa">GPA: 3.46 / 4.00</p>
      </div>
    </div>
  );
};

export default Education;
