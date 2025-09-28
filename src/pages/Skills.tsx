import React from 'react';
import './Skills.css';

const skills = {
  'HR Expertise': [
    'Industrial & Employee Relations',
    'Indonesian Labor Law',
    'Policy Implementation & Compliance',
    'Grievance Handling',
    'Employee Welfare',
  ],
  'Technical Skills': [
    'Data Analysis & HRIS',
    'Python (for Automation)',
    'MS Excel (Advanced)',
    'MS PowerPoint & MS Word',
  ],
  'Interpersonal Skills': [
    'Conflict Management & Negotiation',
    'Problem Solving',
    'Project Management',
    'Professional Communication',
  ],
};

const Skills: React.FC = () => {
  return (
    <div className="skills-page">
      <h1>Skills</h1>
      <div className="skills-container">
        {Object.entries(skills).map(([category, skillList]) => (
          <div className="skill-category" key={category}>
            <h2>{category}</h2>
            <ul>
              {skillList.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
