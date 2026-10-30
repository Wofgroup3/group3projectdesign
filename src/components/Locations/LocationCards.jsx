import React from "react";
import "./Location.css";

const LocationCards = () => {
  return (
    <div className="container">
      <div className="imo-wrapper">
        <div className="imo-content">
          <h2>Imo</h2>
          <div className="address">
            <div className="add">
              <p>
                <span>Designo Central Office</span>
                3886 Dreamland Junction <p>by World Bank Owerri, Imo State</p>
              </p>
            </div>
            <div className="contact">
              <p>
                <span>Contact : </span> P : +234-902-033-2416{" "}
                <p>M : contact@wofgroup3.com</p>
              </p>
            </div>
          </div>
        </div>

        <div className="owerri-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.514130057893!2d7.003517774744544!3d5.490381294489467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10425b9885ff69ef%3A0xba49edfc584fff66!2sLarcade%20Shopping%20Centre!5e0!3m2!1sen!2sng!4v1793188047779!5m2!1sen!2sng"
            allowfullscreen=""
          ></iframe>
        </div>
      </div>

      {/* lagos */}

      <div className="lagos-wrapper">
        <div className="lagos-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7926.858310357849!2d3.3398389747539268!3d6.593462793400267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9221368d972f%3A0x4d38e113e43aa588!2sComputer%20Village%2C%20Opebi%2C%20Ikeja%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1793142544727!5m2!1sen!2sng"
            allowfullscreen=""
          ></iframe>
        </div>
        <div className="lagos-content">
          <h2>Lagos</h2>
          <div className="address">
            <div className="add">
              <p>
                <span>Designo Branch Office</span>
                15 Mechanic Road Off Alausa,{" "}
                <p>Computer Village, Ikeja, Lagos State</p>
              </p>
            </div>
            <div className="contact">
              <p>
                <span>Contact : </span> P : +234-902-033-2416{" "}
                <p>M : contact@wofgroup3.com</p>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* abuja */}

      <div className="abuja-wrapper">
        <div className="abuja-content">
          <h2>FCT Abuja</h2>
          <div className="address">
            <div className="add">
              <p>
                <span>Designo Branch Office</span>
                119 Maitama Opp WEMA Bank, <p>Madala Zone 9, FCT Abuja</p>
              </p>
            </div>
            <div className="contact">
              <p>
                <span>Contact : </span> P : +234-902-033-2416{" "}
                <p>M : contact@wofgroup3.com</p>
              </p>
            </div>
          </div>
        </div>

        <div className="abuja-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7875.882758851825!2d6.9272856404391865!3d9.249535963283332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104c2f70bb1a815d%3A0x31a4062ce25e9827!2sAbuja%20905102%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1793142664735!5m2!1sen!2sng"
            allowfullscreen=""
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LocationCards;