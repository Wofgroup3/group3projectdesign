import React from "react";
import "./Cards.css";
import Expresslogo from "../../../assets/express.jpg" 
import Eyecamlogo from "../../../assets/eyecam.jpg" 
import Photonlogo from "../../../assets/photon.jpg" 
import Builderlogo from "../../../assets/Builder.jpg"
import Blogrlogo from "../../../assets/Blogr.jpg"
import Camplogo from "../../../assets/camp.jpg"



const Cards = () => {
  return (
    <div className="container">
      <div className="card-wrapper">
        <div className="card">
          <div className="card-header">
            <img src={Expresslogo} alt="" />
          </div>
          <div className="card-body">
            <h2>EXPRESS</h2>
            <p>
              Solving the problem of poor indoor air quality by filtering the
              air.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <img src={Eyecamlogo} alt="" />
          </div>
          <div className="card-body">
            <h2>EYECAM</h2>
            <p>
              Site for low-cost money transfers and sending money within
              seconds.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <img src={Photonlogo} alt="" />
          </div>
          <div className="card-body">
            <h2>PHOTON</h2>
            <p>A multi-carrier shipping website for ecommerce businesses.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <img src={Builderlogo} alt="" />
          </div>
          <div className="card-body">
            <h2>BUILDER</h2>
            <p>
              Connects users with local contractors based on their location.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <img src={Blogrlogo} alt="" />
          </div>
          <div className="card-body">
            <h2>BLOGR</h2>
            <p>
              Blogr is a platform for creating an online blog or publication.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <img src={Camplogo} alt="" />
          </div>
          <div className="card-body">
            <h2>CAMP</h2>
            <p>
              Get expert training in coding, data, design and digital marketing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
