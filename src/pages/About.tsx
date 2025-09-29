import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About: React.FC = () => {
  return (
    <main className="about-page">
      <div className="about-container">
        <div className="about-header">
          <img
            src="/profile.jpg"
            alt="MOCH. WAHYU HERIYANTO"
            className="about-profile-image"
          />
          <h1>From Psychology to Python: My Journey in Humanizing the Workplace</h1>
        </div>
        <div className="about-narrative">
          <p>
            My career in Human Resources began with a deep fascination for psychology—understanding what motivates and drives people. For over a decade at TRANS TV, I applied this understanding not just to manage industrial relations, but to truly listen and resolve the issues faced by hundreds of employees.
          </p>
          <p>
            I learned that even the best policies are ineffective without sincere dialogue. I mediated hundreds of disputes, not merely to resolve conflicts, but to build bridges of understanding between employees and management. The result? A reduction in formal grievances by over 15% and a more open work environment.
          </p>
          <p>
            However, I realized empathy alone isn't enough. In the modern era, HR must be data-driven. This curiosity led me to learn Python, not to become a programmer, but to answer critical questions: 'Why do employees leave?', 'How can we improve efficiency without sacrificing quality?'. By automating reports that once took two days into a three-hour process, I proved that technology can free us from repetitive tasks to focus on what matters most: people.
          </p>
        </div>
        <blockquote className="mission-statement">
          "My mission is simple: to create a workplace where employees feel valued and the company can grow sustainably. I am ready to bring my unique blend of industrial relations expertise, data analysis skills, and a passion for innovation to your team."
        </blockquote>
        <div className="about-cta">
          <p>See how I put this approach into practice:</p>
          <div className="cta-buttons">
            <Link to="/portfolio" className="cta-link primary">View Featured Projects</Link>
            <Link to="/experience" className="cta-link secondary">View Work History</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
