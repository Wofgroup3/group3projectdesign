import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Showcase from "../components/WebDesign/Showcase/Showcase";
import Cards from "../components/WebDesign/Cards/Cards";
import Cat from "../components/WebDesign/Categories/Cat";

const WebDesign = () => {
  return (
    <div>
      <Navbar />
      <Showcase />
       <Cards />
       <Cat />
      <Footer />
      
    </div>
  );
};

export default WebDesign;
