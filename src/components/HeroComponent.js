import React from "react";
import styles from "./HeroComponent.module.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function HeroComponent() {
  return (
    <div className={styles.heroContainer}>
      <video
        src={process.env.PUBLIC_URL + "/videos/sunce.mp4"}
        autoPlay
        loop
        muted
      />
      <h1>Welcome to Azra Apartments</h1>
      <div className={styles.heroButton}>
        <Button
          className={styles.buttons}
          buttonStyle="button--outline"
          buttonSize="button--large"
        >
            <Link to="/contact" className={styles.contactLink}>
            Contact Us
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default HeroComponent;
