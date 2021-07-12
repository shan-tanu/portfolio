import React from "react";
import FooterLink from "../FooterLink/FooterLink";
import Header from "../Header/Header";
import "./Contact.css";
import contactVector from "../../assets/contact_anime.png";

import github from "../../assets/gh.png";
import linkedin from "../../assets/li.png";
import instagram from "../../assets/in.png";
import web from "../../assets/web.png";

const Contact = () => {
  return (
    <div className="section-container">
      <Header
        heading="Get in Touch."
        details="Interested to collaborate ? Feel free to drop me an e-mail. "
      />
      <div className="contact-form-container">
        <form className="contact-form">
          <input
            type="email"
            placeholder="Your email."
            name="email"
            className="input-box email-input"
          />
          <textarea
            type="text"
            placeholder="Your message"
            name="message"
            className="input-box body-input"
          ></textarea>
          <button type="submit" className="contact-btn">
            Send Email
          </button>
        </form>
      </div>

      {/* social icons */}
      <div className="social-icons-container">
        <a href="https://github.com/shan-tanu"></a>
        <img src={github} alt="social" className="social-icon" />

        <a href="https://www.linkedin.com/in/shantanu-mysore-gopinath-150a7b16a/"></a>
        <img src={linkedin} alt="social" className="social-icon" />

        <a href="https://www.instagram.com/___s_m_g/"></a>
        <img src={instagram} alt="social" className="social-icon" />

        <a href="https://shan-tanu.github.io/portfolio/"></a>
        <img src={web} alt="social" className="social-icon" />
      </div>

      <FooterLink phrase="Read more " toAddress="/about" link="about me." />
      <div className="contact-vector">
        <img src={contactVector} alt="Contact background." />
      </div>
    </div>
  );
};

export default Contact;
