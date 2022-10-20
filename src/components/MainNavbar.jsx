import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ReactSwitch from "react-switch";
import "../styles/MainNavbar.css";

const MainNavbar = ({ toggleTheme, theme }) => {
  return (
    <div className="nav">
      <Navbar collapseOnSelect expand="lg" sticky="top" className="px-5">
        <Navbar.Brand>
          <a href="/" className="navbrand">
            TAYRA CUTRI
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <a href="#about" className="nav-link nav-link-grow-up">
              About
            </a>
            <a href="#skills" className="nav-link nav-link-grow-up">
              Skills
            </a>
            <a href="#projects" className="nav-link nav-link-grow-up">
              Recent Projects
            </a>
            <a href="#contact" className="nav-link nav-link-grow-up">
              Contact Me
            </a>
          </Nav>
        </Navbar.Collapse>
        <div className="switch">
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </Navbar>
    </div>
  );
};

export default MainNavbar;
