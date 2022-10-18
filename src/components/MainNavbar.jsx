import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/MainNavbar.css";

const MainNavbar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      sticky="top"
      className="px-5"
      style={{ backgroundColor: "#E5D9CA" }}
    >
      <Navbar.Brand>TAYRA CUTRI</Navbar.Brand>
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
    </Navbar>
  );
};

export default MainNavbar;
