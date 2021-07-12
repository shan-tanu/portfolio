import React from "react";
import Header from "../Header/Header";
import "./About.css";
import aboutVector from "../../assets/about_vector.png";
import FooterLink from "../FooterLink/FooterLink";
import aboutAnime from "../../assets/about_anime.gif";

const About = () => {
  return (
    <div className="section-container">
      {/* Vector frame */}
      <div className="vector-frame">
        <img
          src={aboutVector}
          alt="About background image"
          className="about-vector"
        />
      </div>
      <Header
        heading="About Me."
        details=" A technology enthusiast, zealous about coding with great problem
            solving skills and the ability to perform well in a team."
      />

      <div className="about-main">
        <div className="about-main-left">
          {/* subsection */}
          <h3 className="about-sub-head">Undergraduate Student</h3>
          <p className="about-details">
            I am pursuing B.Tech in Computer Sciences at VIT,Vellore.
          </p>
        </div>
        <div className="about-main-right">
          <img
            src={aboutAnime}
            alt="About Page Image"
            className="about-anime"
          />
        </div>
      </div>

      <FooterLink
        toAddress="/projects"
        link="Projects."
        phrase="Check out my "
      />
    </div>
  );
};

export default About;
