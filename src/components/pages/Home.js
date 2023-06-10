import React from "react";
import HeroComponent from "../HeroComponent";
import Footer from "../Footer";
import ImageGallery from "../ImageGallery";
import Contact from "./Contact";
import About from "./About";

const galleryImages = [
  {
    src: process.env.PUBLIC_URL + "/images/apartments1.png",
    alt: "Azra Apartments",
  },
  {
    src: process.env.PUBLIC_URL + "/images/apartments2.jpg",
    alt: "Azra Apartment",
  },
  {
    src: process.env.PUBLIC_URL + "/images/apartmani3.JPG",
    alt: "Azra Apartments",
  },
  {
    src: process.env.PUBLIC_URL + "/images/apartmani4.JPG",
    alt: "Azra Apartments",
  },
  {
    src: process.env.PUBLIC_URL + "/images/apartmani5.JPG",
    alt: "Azra Apartments",
  },
  {
    src: process.env.PUBLIC_URL + "/images/apartmani6.JPG",
    alt: "Azra Apartments",
  },
];

export { galleryImages };

function Home() {
  return (
    <>
      <HeroComponent />
      <ImageGallery galleryImages={galleryImages} />
      <Contact />
      <About />
      <Footer />
    </>
  );
}

export default Home;
