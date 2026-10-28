import React from "react";
import "./Cat.css";
import { Link } from "react-router-dom";
import skillImage from "../../../assets/skill1.png";
import skill2Image from "../../../assets/skill2.png";
import skill3Image from "../../../assets/graphic.jpg";

const Cat = () => {
  return (
    <section id="skills">
      <div className="container">
        <div className="cat-wrapper">
          

          <div className="right-content">
            <Link to="/app-design">
              <div className="app-img">
                <img src={skill2Image} alt="" />
                <div className="img-content">
                  <h2>APP DESIGN</h2>
                  <p>VIEW PROJECTS</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="right-content">
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
