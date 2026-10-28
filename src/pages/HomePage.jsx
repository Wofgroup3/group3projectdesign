import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Showcase from "../components/Hompage/Showcase/Showcase";
import Skill from "../components/Hompage/Skill/Skill";
import Cards from "../components/Hompage/Cards/Cards";
import Footer from "../components/Footer/Footer";


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Showcase />
      <Skill />
      <Cards />
      <Footer />
      
    </div>
  );
};

export default HomePage;
