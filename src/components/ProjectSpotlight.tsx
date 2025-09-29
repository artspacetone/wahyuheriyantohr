import React from 'react';
import './ProjectSpotlight.css';

interface ProjectSpotlightProps {
  title: string;
  problem: string;
  solution: string;
  outcome: React.ReactNode;
  imageUrl?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
}

const ProjectSpotlight: React.FC<ProjectSpotlightProps> = ({
  title,
  problem,
  solution,
  outcome,
  imageUrl,
  imageAlt,
  imagePosition = 'right'
}) => {
  return (
    <div className={`spotlight-card ${imagePosition === 'left' ? 'image-left' : 'image-right'}`}>
      {imageUrl && (
        <div className="spotlight-image-container">
          <img
            src={imageUrl}
            alt={imageAlt || title}
            className="spotlight-image"
            loading="lazy"
            width={600}
            height={400}
            decoding="async"
          />
        </div>
      )}
      <div className="spotlight-content">
        <h2>{title}</h2>
        <div className="spotlight-section">
          <h3>Problem</h3>
          <p>{problem}</p>
        </div>
        <div className="spotlight-section">
          <h3>Solution</h3>
          <p>{solution}</p>
        </div>
        <div className="spotlight-section result">
          <h3>Results</h3>
          {outcome}
        </div>
      </div>
    </div>
  );
};

export default ProjectSpotlight;
