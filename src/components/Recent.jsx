import React from "react";
import bikes from "../assets/projects/bikes.jpg";
import hackflix from "../assets/projects/hackflix.jpg";
import arrow from "../assets/projects/right-arrow.png";
import "../styles/Recent.css";

const Recent = () => {
  return (
    <div className="recent" id="projects">
      <h2>Recent projects</h2>
      <div className="projects-container">
        <div className="card">
          <img src={bikes} alt="image1" className="top" />
          <h4>Rad Power Bikes | E-commerce</h4>
          <p>React.js, Redux, MySQL, Sequelize, Bootstrap</p>
          <a href="https://hackpowerbikes.vercel.app/" target="blank">
            Live Demo <img className="arrow-main-button" src={arrow} alt="" />
          </a>
        </div>

        <div className="card">
          <img src={hackflix} alt="image1" className="top" />
          <h4>Hackflix</h4>
          <p>React.js, Bootstrap</p>
          <a href="/">
            Live Demo <img className="arrow-main-button" src={arrow} alt="" />
          </a>
        </div>

        {/* <div class="card">
          <img src="./assets/business.svg" alt="image1" class="top" />
          <h3>Business Strategy</h3>
          <p>
            Assertively parallel task synergistic deliverables after
            high-quality.
          </p>
          <a href="#">Learn More</a>
        </div> */}
      </div>
    </div>
  );
};

export default Recent;
