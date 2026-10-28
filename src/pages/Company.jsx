import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Showcase from "../components/Company/Showcase/Showcase";
import Talent from "../components/Company/Talent/Talent";
import Cities from "../components/Company/Cities/Cities";
import Real from "../components/Company/Real/Real";

const Company = () => {
  return (
    <div>
      <Navbar />
      <Showcase />
      <Talent />
      <Cities />
      <Real />
      <Footer />
    </div>
  );
};

export default Company;
