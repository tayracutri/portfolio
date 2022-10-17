import React from "react";
import avatar from "../assets/profile.jpeg";
import CV from "../assets/files/CV-Tayra Cutri.pdf";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <img src={avatar} alt="avatar" />
      <h1>Hi, I'm Tayra :)</h1>
      <p>Full Stack Developer Junior.</p>
      <a href={CV} download="CV-Tayra Cutri.pdf">
        Download CV
      </a>
    </div>
  );
};

export default About;
