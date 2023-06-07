import React from "react";
import styles from "../pages/Home.module.css";
import HeroComponent from "../HeroComponent";
import Cards from "../Cards";

function Home() {
  return (
    <>
      <HeroComponent />
      <Cards />
    </>
  );
}

export default Home;
