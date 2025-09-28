import React from 'react';
import './ProjectCard.css';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}
const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, liveUrl, repoUrl }) => {
  return (
    <div className="project-card">
      <img 
        src={imageUrl} 
        alt={`Proyek: ${title}`} 
        className="project-image"
        loading="lazy"
        width={400}
        height={300}
        decoding="async"
      />
      <div className="project-info">
        <p className="project-description">{description}</p>
        <div className="project-links">
          {liveUrl && <a href={liveUrl} target="_blank" rel="noopener noreferrer">View Live</a>}
          {repoUrl && <a href={repoUrl} target="_blank" rel="noopener noreferrer">View Code</a>}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
