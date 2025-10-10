import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Moch. Wahyu Heriyanto</h1>
        <p className="hero-subtitle">Full-Stack Developer & AI Enthusiast</p>
        <a href="/projects" className="hero-button">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;
