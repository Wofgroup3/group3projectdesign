import React from "react";
import Facebooklogo from "../../assets/facebook.jpeg";
import Instalogo from "../../assets/instagram.jpeg";
import Twitterlogo from "../../assets/twitter.jpeg";
import Youtubelogo from "../../assets/youtube.jpeg";

const FooterContent = () => {
  return (
    <div className="footer-txt-wrapper">
      <div className="address">
        <p>Designo Central Office</p>
        <p>3886 Dreamland Junction Worldbank</p>
        <p>Owerri Municipal, Imo</p>
      </div>
      <div className="contact">
        <p>P: +234 818 935 6543</p>
        <p>M: contact@group3project.co</p>
      </div>
      <div className="social">
        <img src={Facebooklogo} alt="" />
        <img src={Instalogo} alt="" />
        <img src={Twitterlogo} alt="" />
        <img src={Youtubelogo} alt="" />
      </div>
    </div>
  );
};

export default FooterContent;
