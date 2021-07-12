import React from "react";
import "./Projects.css";

function ProjectCard({
  projectName,
  projectDescription,
  imageUrl,
  projectUrl,
}) {
  return (
    <div className="project-card">
      <div className="image-container">
        <a href={projectUrl}>
          <img src={imageUrl} alt="ProjectImage" className="project-image" />
        </a>
      </div>
      <div className="project-details-container">
        <h2 className="project-heading">{projectName}</h2>
        <p className="project-details">{projectDescription}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
