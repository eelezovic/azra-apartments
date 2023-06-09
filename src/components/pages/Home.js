import React from "react";
import HeroComponent from "../HeroComponent";
import Cards from "../Cards";
import Footer from "../Footer";
import ImageGallery from "../ImageGallery";

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

function Home() {
  return (
    <>
      <HeroComponent />
      <Cards />
      <ImageGallery galleryImages={galleryImages} />
      <Footer />
    </>
  );
}

export default Home;
