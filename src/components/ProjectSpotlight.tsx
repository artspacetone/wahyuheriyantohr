import React from 'react';
import './ProjectSpotlight.css';

interface ProjectSpotlightProps {
  title: string;
  problem: string;
  solution: string;
  outcome: React.ReactNode;
  imageUrl: string;
  imagePosition?: 'left' | 'right';
}

const ProjectSpotlight: React.FC<ProjectSpotlightProps> = ({
  title,
  problem,
  solution,
  outcome,
  imageUrl,
  imagePosition = 'right'
}) => {
  return (
    <div className={`spotlight-card ${imagePosition === 'left' ? 'image-left' : ''}` }>
      <div className="spotlight-image-container">
        <img src={imageUrl} alt={title} className="spotlight-image" loading="lazy" />
      </div>
      <div className="spotlight-content">
        <h2>{title}</h2>
        <div className="spotlight-section">
          <h3>The Problem</h3>
          <p>{problem}</p>
        </div>
        <div className="spotlight-section">
          <h3>The Solution</h3>
          <p>{solution}</p>
        </div>
        <div className="spotlight-section result">
          <h3>The Results</h3>
          {outcome}
        </div>
      </div>
    </div>
  );
};

export default ProjectSpotlight;
