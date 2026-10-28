import React from "react";
import "./Showcase.css";
import CompanyP from "../../../assets/company.jpeg"
import Bgred from "../../../assets/bgcompany.png"

const Showcase = () => {
  return (
    <div className="container">
      <div className="about-showcase-wrapper">
        <div className="left-content">
          <h2>About</h2>
          <p>
            Founded in 2026, we are a creative agency having undergone firsthand
            training from Whoba Ogo Foundation. We ensure our products and
            services provide lasting solutions for our clients. We've partnered
            with many startups, corporations and nonprofits alike to craft
            designs that make real impact. We're always looking forward to
            creating brands, products and digital experiences that connect with
            our clients' needs.
          </p>
        </div>
        <div className="about-shape">
            <img src={Bgred} alt="" />
        </div>
        <div className="right-content">
            <img src={CompanyP} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Showcase;