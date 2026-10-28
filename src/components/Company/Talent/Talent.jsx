import React from "react";
import "./Talent.css";
import talentpic from "../../../assets/womanstirring.jpg";

const Talent = () => {
  return (
    <div className="container">
      <div className="talent-wrapper">
        <div className="left-side">
          <img src={talentpic} alt="" />
        </div>
        <div className="right-side">
          <h2>World-class talent</h2>
          <p>
            We are a team of strategists, problem solvers and developers. Every
            design is thoughtfully crafted from concept to launch, ensuring
            success in its given market. We are constantly updating our skills
            in a myriad of platforms.
          </p>
          <br />
          <p>
            Our team is multi-talented and we are not merely interested in form
            - content and meaning are just as important. We give great
            importance to craftsmanship, service and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand's story and mission.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Talent;
