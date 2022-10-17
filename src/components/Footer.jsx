import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer-basic">
      <footer>
        <div className="social">
          <a href="https://github.com/tayracutri" target="blank">
            <i className="icon ion-social-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/tayracutri/">
            <i className="icon ion-social-linkedin"></i>
          </a>
        </div>

        <p className="copyright">
          Tayra Cutri | Full Stack Developer Junior © 2022
        </p>
      </footer>
    </div>
  );
};

export default Footer;
