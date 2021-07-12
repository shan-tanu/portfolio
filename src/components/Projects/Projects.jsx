import React from "react";
import "./Projects.css";
import Header from "../Header/Header";
import FooterLink from "../FooterLink/FooterLink";
import { projectsData } from "./../../assets/projectsData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="section-container">
      <Header
        heading="My Projects."
        details="Heare are a few projects that I have built:"
      />

      <div className="project-cards-container">
        {projectsData.map(
          ({ projectName, projectDescription, imageUrl, projectUrl }) => {
            return (
              <ProjectCard
                projectName={projectName}
                projectDescription={projectDescription}
                imageUrl={imageUrl}
                projectUrl={projectUrl}
              />
            );
          }
        )}
      </div>

      <FooterLink toAddress="/skills" phrase="Check out " link="my skills." />
    </div>
  );
};

export default Projects;
