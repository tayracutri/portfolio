import React from "react";
import "../styles/Skills.css";
import bootstrap from "../assets/skills/bootstrap.png";
import css from "../assets/skills/css.png";
import github from "../assets/skills/github.png";
import js from "../assets/skills/js.png";
import html from "../assets/skills/html.png";
import mysql from "../assets/skills/mysql.png";
import node from "../assets/skills/node.png";
import react from "../assets/skills/react.png";
import redux from "../assets/skills/redux.png";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h2>Skills</h2>
      <div className="exp-container">
        <div className="col">
          <div>
            <img src={js} alt="Javascript" className="animation" />
            <p>JavaScript</p>
          </div>
          <div>
            <img src={bootstrap} alt="Bootstrap" className="animation" />
            <p>Bootstrap</p>
          </div>
          <div>
            <img src={github} alt="Github" className="animation" />
            <p>GitHub</p>
          </div>
        </div>
        <div className="col">
          <div>
            <img src={react} alt="React" className="animation" />
            <p>React</p>
          </div>
          <div>
            <img src={node} alt="Node" className="animation" />
            <p>Node.js</p>
          </div>
          <div>
            <img src={css} alt="CSS" className="animation" />
            <p>CSS 3</p>
          </div>
        </div>
        <div className="col">
          <div>
            <img src={redux} alt="Redux" className="animation" />
            <p>Redux</p>
          </div>
          <div>
            <img src={mysql} alt="MySQL" className="animation" />
            <p>MySQL</p>
          </div>
          <div>
            <img src={html} alt="HTML" className="animation" />
            <p>HTML 5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
