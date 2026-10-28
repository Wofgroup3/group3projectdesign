import React from "react";

import Expresslogo from "../../../assets/airfilter1.jpg";
import Eyecamlogo from "../../../assets/eyecam1.jpg";
import Photonlogo from "../../../assets/faceit.jpg";
import Builderlogo from "../../../assets/todo.jpg";
import Blogrlogo from "../../../assets/loopstudios.jpg";
import Camplogo from "../../../assets/publish1.jpg";

const Cards = () => {
  return (
    <div className="container">
      <div className="card-wrapper">
        <div className="card">
          <div className="card-header">
            <img src={Expresslogo} alt="" />
          </div>
          <div className="card-body">
            <h2>AIRFILTER</h2>
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
              Products that lets you edit your favorite photos and videos at any
              time.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <img src={Photonlogo} alt="" />
          </div>
          <div className="card-body">
            <h2>FACE IT</h2>
            <p>
              Get to meet your favorite internet superstar with the faceit app.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <img src={Builderlogo} alt="" />
          </div>
          <div className="card-body">
            <h2>TODO</h2>
            <p>A todo app that features cloud sync with light and dark mode.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <img src={Blogrlogo} alt="" />
          </div>
          <div className="card-body">
            <h2>LOOPSTUDIOS</h2>
            <p>A VR experience app made for Loopstudios.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <img src={Camplogo} alt="" />
          </div>
          <div className="card-body">
            <h2>PUBLISH</h2>
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
