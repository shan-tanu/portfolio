import React from "react";
import "./Skills.css";

function SkillCard({ skillName, skillURL }) {
  return (
    <div className="skill">
      <img src={skillURL} alt="Logo" />
      <p>{skillName}</p>
    </div>
  );
}

export default SkillCard;
