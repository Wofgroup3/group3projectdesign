import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Company from "./pages/Company";
import Location from "./pages/Location";
import Contact from "./pages/Contact";
import WebDesign from "./pages/WebDesign";
import AppDesign from "./pages/AppDesign";
import GraphicsDesign from "./pages/GraphicsDesign";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="our-company" element={<Company />} />
        <Route path="location" element={<Location />} />
        <Route path="contact" element={<Contact />} />
        <Route path="web-design" element={<WebDesign />} />
        <Route path="app-design" element={<AppDesign />} />
        <Route path="graphics-design" element={<GraphicsDesign />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
