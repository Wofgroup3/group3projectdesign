import React from "react";

import { Link } from "react-router-dom";
import skillImage from "../../../assets/skill1.png";
import skill3Image from "../../../assets/graphic.jpg";

const Cat = () => {
  return (
    <section id="skills">
      <div className="container">
        <div className="cat-wrapper">
          <div className="right-content">
            <Link to="/web-design">
              <div className="app-img">
                <img src={skillImage} alt="" />
                <div className="img-content">
                  <h2>WEB DESIGN</h2>
                  <p>VIEW PROJECTS</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="left-content">
            <Link to="/graphics-design">
              <div className="graph-img">
                <img src={skill3Image} alt="" />
                <div className="img-content">
                  <h2>GRAPHICS DESIGN</h2>
                  <p>VIEW PROJECTS</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cat;
