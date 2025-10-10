import React from 'react';
import './Experience.css';

type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  points?: string[];
  achievements?: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: 'Accounting Supervisor',
    company: 'PT Televisi Transformasi Indonesia (Trans TV)',
    location: 'Jakarta, Indonesia',
    period: 'June 2019 – Present',
    points: [
      'Supervised an accounting team of 3 members, overseeing the full cycle of AR, AP, and General Ledger operations.',
      'Led month-end and year-end closing processes, ensuring the timely and accurate delivery of financial reports to management.',
      'Reviewed and approved operational fund requests, ensuring strict alignment with corporate budgets and financial governance policies.',
    ],
    achievements: [
        'Developed a Python script to automate monthly reconciliation reports, <strong>reducing processing time by 40%</strong>.',
        'Implemented a new data verification procedure that successfully <strong>decreased data entry errors by 15%</strong>.'
    ]
  },
  {
    role: 'Accounting Staff',
    company: 'PT Televisi Transformasi Indonesia (Trans TV)',
    location: 'Jakarta, Indonesia',
    period: 'August 2015 – May 2019',
    points: [
      'Managed daily journal entries, performed bank reconciliations, and prepared foundational financial statements.',
      'Administered the full cycle of vendor invoices and payments and monitored accounts receivable status.',
      'Assisted in data preparation for annual budgeting and external auditing processes.',
    ]
  },
  {
    role: 'Store Manager',
    company: 'J.CO Donuts & Coffee',
    location: 'Cirebon, Indonesia',
    period: 'March 2012 – April 2014',
    points: [
      'Held full P&L responsibility for the store, managing operational budgets and costs to achieve profit targets.',
      'Performed daily sales analysis to identify trends and inform inventory and staffing decisions.',
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <div className="experience-page">
      <h1>Professional Experience & Skills</h1>
      <section className="xp-stats">
        <div className="stat">
          <span className="value">10+ Yrs</span>
          <span className="label">Total Experience</span>
        </div>
        <div className="stat">
          <span className="value">40%↑</span>
          <span className="label">Process Efficiency</span>
        </div>
        <div className="stat">
          <span className="value">15%↓</span>
          <span className="label">Error Reduction</span>
        </div>
        <div className="stat">
          <span className="value">Python</span>
          <span className="label">Automation Skill</span>
        </div>
      </section>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <h4>{exp.company} | {exp.location}</h4>
              <p className="period">{exp.period}</p>
              {exp.points && (
                <ul>
                  {exp.points.map((point, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
                  ))}
                </ul>
              )}
              {exp.achievements && exp.achievements.map((achievement, i) => (
                <p className="achievement" key={i}>
                  <strong>Key Achievement:</strong>
                  <span dangerouslySetInnerHTML={{ __html: achievement }} />
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <section>
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Data Analysis & Automation</h3>
            <ul>
                <li>Python (Pandas, NumPy)</li>
                <li>JavaScript (ES6+)</li>
                <li>Node.js (Express.js)</li>
                <li>SQL</li>
                <li>Data Visualization</li>
                <li>ETL Processes</li>
                <li>Process Automation</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Accounting & Finance</h3>
            <ul>
                <li>Financial Reporting</li>
                <li>General Ledger (GL)</li>
                <li>AP/AR Management</li>
                <li>Budgeting & Forecasting</li>
                <li>Internal Controls</li>
                <li>Financial Governance</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Software & Interpersonal</h3>
            <ul>
                <li>SAP, Oracle, Accurate</li>
                <li>Advanced Microsoft Excel</li>
                <li>Microsoft Office Suite</li>
                <li>Team Leadership</li>
                <li>Problem Solving</li>
                <li>Inter-departmental Communication</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h2 className="section-title">Education</h2>
        <div className="education-card">
          <h3>Bachelor of Economics (S.E.), Accounting</h3>
          <h4>Universitas Muhamadiyah Prof. Dr. Hamka, Jakarta</h4>
          <p className="graduation-details">Graduated: 2010 | GPA: 3.28 / 4.00</p>
        </div>
      </section>
    </div>
  );
};

export default Experience;