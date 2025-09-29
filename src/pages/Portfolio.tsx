import React from 'react';
import ProjectSpotlight from '../components/ProjectSpotlight';
import './Portfolio.css';

const portfolioData = [
  {
    title: 'HR Report Automation with Python',
    problem: 'The monthly HR reporting process (turnover, attendance, demographics) was manual, time-consuming (2 full workdays), and prone to human error.',
    solution: 'I independently learned the fundamentals of Python and developed a script to automatically pull, clean, and visualize data from our HRIS.',
    outcome: (
      <ul>
        <li><strong>90% Increase in Efficiency:</strong> Reduced processing time from 16 hours to under 3 hours.</li>
        <li><strong>100% Data Accuracy:</strong> Eliminated the risk of manual errors in report compilation.</li>
        <li><strong>Faster Insights:</strong> Management received critical data earlier for strategic decision-making.</li>
      </ul>
    ),
    imageUrl: '/portfolio/automation-dashboard.jpg',
    imagePosition: 'right' as const
  },
  {
    title: 'Onboarding Program Redesign to Boost Satisfaction',
    problem: 'Internal surveys revealed that new hires felt disconnected and did not fully understand the company culture within their first 3 months.',
    solution: 'I redesigned the onboarding program from an administrative checklist into a "90-day journey," including structured introductions, a buddy system, and regular check-ins with managers and HR.',
    outcome: (
      <ul>
        <li><strong>25% Increase in New Hire Satisfaction:</strong> Measured via anonymous surveys after 90 days.</li>
        <li><strong>Faster Time-to-Productivity:</strong> New employees felt better adapted and able to contribute to their teams more quickly.</li>
        <li><strong>Improved Retention:</strong> New hires were more likely to stay beyond the first year.</li>
      </ul>
    ),
    imageUrl: '/portfolio/onboarding-process.jpg',
    imagePosition: 'left' as const
  },
  {
    title: 'Proactive Mediation Strategy to Reduce Grievances',
    problem: 'A high volume of formal grievances created a reactive work environment and consumed significant management time.',
    solution: 'I implemented a weekly "HR clinic" for informal, proactive consultations and conducted regular policy education sessions to bridge information gaps.',
    outcome: (
      <ul>
        <li><strong>15% Reduction in Formal Grievances:</strong> Most issues were resolved at an informal stage.</li>
        <li><strong>Increased Employee Trust:</strong> Staff felt more comfortable approaching HR before issues escalated.</li>
        <li><strong>Better Work Environment:</strong> Overall workplace satisfaction improved significantly.</li>
      </ul>
    ),
    imageUrl: '/portfolio/mediation-workshop.jpg',
    imagePosition: 'right' as const
  },
];

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio-page">
      <h1>Featured Projects</h1>
      <p className="portfolio-intro">
        Here are a few examples of how I apply my skills to create impactful, data-driven solutions in a real-world HR environment.
      </p>
      <div className="portfolio-container">
        {portfolioData.map((project, index) => (
          <ProjectSpotlight
            key={index}
            title={project.title}
            problem={project.problem}
            solution={project.solution}
            outcome={project.outcome}
            imageUrl={project.imageUrl}
            imagePosition={project.imagePosition}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
