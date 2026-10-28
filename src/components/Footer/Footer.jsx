import React from "react";
import "./Footer.css";
import FooterBottom from "./FooterBottom";
const Footer = () => {
  return (
    <>
      <div id="footer">
        <div className="container">
          <div className="footer-header">
            <div className="left-content">
              <h2>Let's Talk About</h2>
              <h2>your project</h2>
              <p>
                Ready to take it to the next level? Contact us today and find
                out how our expertise can help your business grow
              </p>
            </div>
            <div className="right-content">
              <button>Get In Touch</button>
            </div>
          </div>
        </div>
      </div>
      <FooterBottom />
    </>
  );
};

export default Footer;
