import React from 'react';
import './Experience.css';

type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  points?: string[];
  achievement?: string;
};

const experiences: ExperienceItem[] = [
  {
    role: 'HR Supervisor / Analyst',
    company: 'TRANS TV',
    location: 'Jakarta, Indonesia',
    period: 'July 2018 – Present',
    points: [
      'Resolved an average of 5-7 industrial disputes per month through mediation, successfully <strong>reducing formal grievances by over 15%</strong> annually.',
      'Educated over 500 employees on company policies, leading to a <strong>20% decrease in compliance-related inquiries</strong>.',
      'Analyzed HR metrics to identify key turnover drivers, resulting in the implementation of engagement programs that <strong>lowered voluntary turnover by 10%</strong>.',
    ],
    achievement: 'Developed a Python script to automate monthly HR reporting, <strong>increasing process efficiency by 90%</strong> (from 2 days to 3 hours).'
  },
  {
    role: 'HR Supervisor',
    company: 'TRANS TV',
    location: 'Jakarta, Indonesia',
    period: 'April 2014 – June 2018',
    points: [
      'Managed payroll and benefits administration for 300+ employees with a <strong>99.8% accuracy rate</strong>.',
      'Renegotiated employee benefit packages with external vendors, achieving <strong>annual cost savings of 10%</strong> for the company.',
      'Designed and implemented a new onboarding program, which <strong>improved new hire satisfaction scores by 25%</strong> within the first 90 days.',
    ]
  },
  {
    role: 'HR Staff',
    company: 'PT. Rifa Putra Utama',
    location: 'Jakarta, Indonesia',
    period: 'February 2012 – January 2014',
    points: [
      'Processed foundational HR administration, including employee data, attendance, and leave requests.',
    ],
    achievement: 'Initiated and implemented a digital filing system for employee records, <strong>reducing document retrieval time by 30%</strong> and ensuring 100% reporting compliance.'
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
          <span className="value">15%↓</span>
          <span className="label">Grievance Reduction</span>
        </div>
        <div className="stat">
          <span className="value">90%↑</span>
          <span className="label">Reporting Efficiency</span>
        </div>
        <div className="stat">
          <span className="value">500+</span>
          <span className="label">Employees Supported</span>
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
              {exp.achievement && (
                <p className="achievement">
                  <strong>Key Achievement:</strong>
                  <span dangerouslySetInnerHTML={{ __html: exp.achievement.replace('Key Achievement: ', '') }} />
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      <section>
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Core HR Competencies</h3>
            <ul>
              <li>Industrial & Employee Relations</li>
              <li>Indonesian Labor Law</li>
              <li>Performance Management</li>
              <li>Grievance Handling & Mediation</li>
              <li>Negotiation</li>
              <li>Talent Acquisition</li>
              <li>Compensation & Benefits</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Technical Skills</h3>
            <ul>
              <li>HR Data Analysis</li>
              <li>HRIS Management</li>
              <li>Python (for Automation)</li>
              <li>Advanced Microsoft Excel</li>
              <li>Microsoft PowerPoint & Word</li>
              <li>HTML & CSS</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Interpersonal Skills</h3>
            <ul>
              <li>Conflict Resolution</li>
              <li>Problem-Solving</li>
              <li>Professional Communication</li>
              <li>Project Management</li>
              <li>Leadership</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h2 className="section-title">Education</h2>
        <div className="education-card">
          <h3>Bachelor of Psychology (S.Psi)</h3>
          <h4>Universitas Muhammadiyah Prof. Dr. Hamka, Jakarta</h4>
          <p className="graduation-details">Graduated: 2011 | GPA: 3.46 / 4.00</p>
        </div>
      </section>
    </div>
  );
};

export default Experience;
