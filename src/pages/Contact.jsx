import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/Contact/ContactForm";
import Cities from "../components/Company/Cities/Cities";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactForm />
      <Cities />
      <Footer />
    </div>
  );
};

export default Contact;
