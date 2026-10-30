import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Company from "./pages/Company";
import Location from "./pages/Location";
import Contact from "./pages/Contact";
import WebDesign from "./pages/WebDesign";
import AppDesign from "./pages/AppDesign";
import GraphicsDesign from "./pages/GraphicsDesign";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";

function AppContent() {
  const location = useLocation();
  
  // Normalize pathname to lowercase for foolproof matching
  const currentPath = location.pathname.toLowerCase();
  const isAuthRoute = currentPath === "/login" || currentPath === "/signup" || currentPath === "/sign-up";

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* 
        When on an auth route, this keeps the underlying background page 
        visible (defaulting smoothly to /contact) 
      */}
      <Routes location={isAuthRoute ? { pathname: "/contact" } : location}>
        <Route path="/" element={<HomePage />} />
        <Route path="our-company" element={<Company />} />
        <Route path="location" element={<Location />} />
        <Route path="contact" element={<Contact />} />
        <Route path="web-design" element={<WebDesign />} />
        <Route path="app-design" element={<AppDesign />} />
        <Route path="graphics-design" element={<GraphicsDesign />} />
        {/* Added route definitions so router handles the paths gracefully */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      {/* Renders the modal overlay on top of the background page */}
      {currentPath === "/login" && <Login />}
      {(currentPath === "/signup" || currentPath === "/sign-up") && <Signup />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;