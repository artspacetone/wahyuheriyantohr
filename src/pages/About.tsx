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
          <h1>From Accounting to Automation: My Journey in Data-Driven Finance</h1>
        </div>
        <div className="about-narrative">
          <p>
            My career began with a solid foundation in finance and accounting, where I spent over a decade ensuring financial accuracy and integrity at TRANS TV. I honed my skills in managing the full accounting cycle, from general ledger operations to month-end closing, always with a keen eye for detail and compliance.
          </p>
          <p>
            However, I noticed that many critical financial processes were manual, time-consuming, and prone to error. This observation sparked my curiosity and led me to a new passion: using technology to solve business problems. I took the initiative to learn programming, starting with Python, not just as a hobby, but as a tool to drive tangible improvements.
          </p>
          <p>
            My breakthrough came when I developed a Python script that automated monthly reconciliation reports. This single project reduced processing time by 40% and significantly decreased data entry errors. This success proved that technology could transform finance from a reactive reporting function into a proactive, strategic partner. I have since expanded my skills to include JavaScript and Node.js to build full-stack data visualization tools.
          </p>
        </div>
        <blockquote className="mission-statement">
          "My mission is to leverage my unique blend of financial expertise and technical skill to build robust, data-driven solutions that increase efficiency, enhance accuracy, and provide actionable insights for strategic decision-making."
        </blockquote>
        <div className="about-cta">
          <p>See how I put this approach into practice:</p>
          <div className="cta-buttons">
            <Link to="/portfolio" className="cta-link primary">View Technical Projects</Link>
            <Link to="/experience" className="cta-link secondary">View Work History</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

<<<<<<< HEAD
export default About;
=======
export default About;
>>>>>>> 9687512e845fa29e543445db877f28e05965f654
