import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/MainNavbar.css";

const MainNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className="px-5">
      <Navbar.Brand>TAYRA CUTRI</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <a href="#about">
            <div className="nav-home-item">
              <p className="m-0 p-0 p-lg-3">About </p>
            </div>
          </a>

          <a href="#skills">
            <div className="nav-home-item">
              <p className="m-0 p-0 p-lg-3">Skills</p>
            </div>
          </a>
          <a href="#projects">
            <div className="nav-home-item">
              <p className="m-0 p-0 p-lg-3">Recent Projects</p>
            </div>
          </a>
          <a href="#contact">
            <div className="nav-home-item">
              <p className="m-0 p-0 p-lg-3">Contact Me</p>
            </div>
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNavbar;
