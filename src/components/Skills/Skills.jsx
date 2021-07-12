import React from "react";
import FooterLink from "../FooterLink/FooterLink";
import Header from "../Header/Header";
import { skillList } from "../../assets/skillsData";
import "./Skills.css";
import SkillCard from "./SkillCard";
import skillsVector from "../../assets/skills_vector.png";

const Skills = () => {
  return (
    <div className="section-container">
      <Header
        heading="My Skills"
        details="Passionate about new technologies, I keep exploring stuff. The stack that I have worked with are:"
      />
      <div className="skill-card-container">
        {skillList.map(({ skillName, skillUrl }) => (
          <SkillCard skillName={skillName} skillURL={skillUrl} />
        ))}
      </div>

      <FooterLink phrase="Get in " toAddress="/contact" link="touch." />

      <div className="skills-vector-frame">
        <img
          src={skillsVector}
          alt="Skills page background."
          className="skills-vector"
        />
      </div>
    </div>
  );
};

export default Skills;
