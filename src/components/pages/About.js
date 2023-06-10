import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.about}>
      <h1 className={styles.heading}>About Us</h1>
      <div className={styles.aboutWrap}>
        <p>
          
          Welcome to Azra Apartments, a family-owned business renowned for
          exceptional customer service for over 15 years. Located in the heart
          of Stoj, a popular destination on the Adriatic Sea, we offer one and
          two-bedroom apartments just a short walk away from beautiful sandy
          beaches, groceries, restaurants, bars, and bakeries. Our
          well-appointed apartments feature small kitchens, private bathrooms,
          balconies, TVs, AC, and free covered parking. At Azra Apartments, we
          take pride in providing personalized attention to ensure your stay is
          comfortable and memorable. Let us be your home away from home as you
          explore the wonders of the Adriatic coastline.
        </p>
      </div>
    </div>
  );
}

export default About;
