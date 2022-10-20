import React from "react";
import "../styles/GetToKnow.css";
import "../styles/App.css";

const GetToKnow = () => {
  return (
    <div className="getToKnow" id="about">
      <div className="getToKnow-container">
        <h2>Get to know me!</h2>
        <p>
          {" "}
          I always loved everything related to IT. I started taking programming
          courses in 2020. This world amazed me. So I decided I wanted to expand
          my knowledge and learn new technologies.
        </p>
        <p>
          I've been working on personal projects for 2 years and a half. And I
          recently finished a full-time Coding Bootcamp in {""}
          <a
            href="https://ha.dev/cursos/coding-bootcamp#structure"
            target="blank"
            style={{ color: "#d37d2d" }}
          >
            Hack Academy
          </a>{" "}
          of 600 hours.
        </p>
      </div>
    </div>
  );
};

export default GetToKnow;
