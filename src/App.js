import React from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home, { galleryImages } from "./components/pages/Home"; // Import galleryImages from Home component
import Contact from "./components/pages/Contact";
import ImageGallery from "./components/ImageGallery";
import About from "./components/pages/About";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/gallery"
            element={<ImageGallery galleryImages={galleryImages} />} 
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

