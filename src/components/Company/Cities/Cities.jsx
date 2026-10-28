import React from "react";
import "./Cities.css";
import cana from "../../../assets/canada.jpg"
import aus from "../../../assets/australia.jpg";
import uk from "../../../assets/uk.jpg";

const Cities = () => {
  return (
    <section className="city-cards">
      <div className="container">
        <div className="city-cards-wrapper">
          <div className="city-home-page">
            <div className="card-header">
              <img src={cana} alt="" />
            </div>
            <div className="card-body">
              <h2>IMO STATE</h2>
            </div>

            <div className="card-footer">
              <button>See More</button>
            </div>
          </div>
          <div className="city-home-page">
            <div className="card-header">
              <img src={aus} alt="" />
            </div>
            <div className="card-body">
              <h2>FCT ABUJA</h2>
            </div>

            <div className="card-footer">
              <button>See More</button>
            </div>
          </div>
          <div className="city-home-page">
            <div className="card-header">
              <img src={uk} alt="" />
            </div>
            <div className="card-body">
              <h2>LAGOS STATE</h2>
            </div>

            <div className="card-footer">
              <button>See More</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Cities;
