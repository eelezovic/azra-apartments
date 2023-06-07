import React from "react";
import styles from "./HeroComponent.module.css";
import { Button } from "./Button";

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
      <p>Spend an unforgettable vacation with us</p>
      <div className={styles.heroButtons}>
        <Button
          className={styles.buttons}
          buttonStyle="button--outline"
          buttonSize="button--large"
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroComponent;
