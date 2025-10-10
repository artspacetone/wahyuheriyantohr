import React from 'react';
import ProjectSpotlight from '../components/ProjectSpotlight';
import './Portfolio.css';

const portfolioData = [
  {
    title: 'Departmental Budget Visualization Dashboard',
    problem: 'Department heads lacked real-time visibility into their budget utilization, leading to slow, reactive spending decisions and difficulty in resource allocation.',
    solution: 'I architected and developed a full-stack interactive web dashboard using JavaScript and Node.js to provide real-time visualization of budget usage against forecasted targets.',
    outcome: (
      <ul>
        <li><strong>Empowered Management:</strong> Enabled department heads with self-service analytics for faster, data-driven expenditure decisions.</li>
        <li><strong>Improved Allocation:</strong> Provided clear insights into spending patterns, allowing for more effective resource allocation.</li>
        <li><strong>Increased Transparency:</strong> Created a single source of truth for departmental budget status, accessible anytime.</li>
      </ul>
    ),
    imageUrl: '/portfolio/automation-dashboard.jpg', // Placeholder image
    imagePosition: 'right' as const
  },
  {
    title: 'Financial Report Automation Script',
    problem: 'The monthly financial reporting process involved manually consolidating data from multiple complex Excel files, a time-consuming task prone to human error.',
    solution: 'I engineered a robust Python script using the Pandas library to fully automate the ETL (Extract, Transform, Load) process for financial reporting.',
    outcome: (
      <ul>
        <li><strong>Drastic Time Reduction:</strong> Significantly cut down manual consolidation work for generating draft P&L statements.</li>
        <li><strong>100% Data Accuracy:</strong> Completely eliminated the potential for human error in data aggregation and calculation.</li>
        <li><strong>Enhanced Focus:</strong> Freed up the finance team to focus on analysis and strategic insights rather than manual data entry.</li>
      </ul>
    ),
    imageUrl: '/portfolio/onboarding-process.jpg', // Placeholder image
    imagePosition: 'left' as const
  },
  {
    title: 'HR Analytics & Reporting Automation',
    problem: 'Tracking key HR metrics like employee turnover and attendance was a manual, 2-day process, resulting in delayed insights and potential data inaccuracies.',
    solution: 'I developed a comprehensive HR analytics solution using Python and connected it to a React-based frontend to track key metrics and automate data collection from the HRIS.',
    outcome: (
      <ul>
        <li><strong>90% Time Saved:</strong> Reduced manual reporting time from 2 days to under 3 hours.</li>
        <li><strong>Improved Data Integrity:</strong> Achieved 100% data accuracy by automating the data collection and cleaning process.</li>
        <li><strong>Faster Decision-Making:</strong> Provided management with timely, accurate data for strategic workforce planning.</li>
      </ul>
    ),
    imageUrl: '/portfolio/mediation-workshop.jpg', // Placeholder image
    imagePosition: 'right' as const
  },
];

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio-page">
      <h1>Relevant Technical Projects</h1>
      <p className="portfolio-intro">
        Here are a few examples of how I apply my technical skills to solve real-world business problems, automate processes, and provide data-driven insights.
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
