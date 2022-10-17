import React from "react";
import bikes from "../assets/projects/bikes.jpg";
import "../styles/Recent.css";
const Recent = () => {
  return (
    <div className="recent" id="projects">
      <h2>Recent Projects</h2>
      <div className="project-card">
        <img className="card-img-top" src={bikes} alt="Card cap" />
        <div>
          <h5 className="title">Rad Power Bikes | E-commerce</h5>

          <a href="https://hackpowerbikes.vercel.app/" target="blank">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Recent;
