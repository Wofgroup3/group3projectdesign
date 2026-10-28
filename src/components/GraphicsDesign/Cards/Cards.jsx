import React from "react";

import Expresslogo from "../../../assets/airfilter1.jpg";
import Eyecamlogo from "../../../assets/eyecam1.jpg";
import Photonlogo from "../../../assets/faceit.jpg";


const Cards = () => {
  return (
    <div className="container">
      <div className="card-wrapper">
        <div className="card">
          <div className="card-header">
            <img src={Expresslogo} alt="" />
          </div>
          <div className="card-body">
            <h2>TIM BROWN</h2>
            <p>A book cover designed for Tim Brown's new release "Change".</p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <img src={Eyecamlogo} alt="" />
          </div>
          <div className="card-body">
            <h2>BOTTLED WATER</h2>
            <p>A simple packaging concept made for bottled water.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <img src={Photonlogo} alt="" />
          </div>
          <div className="card-body">
            <h2>SCIENCE!</h2>
            <p>A poster made in collaboration with the Federal Art Project.</p>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Cards;
