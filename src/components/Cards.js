import React from "react";
import styles from "./Cards.module.css";
import CardItem from "./CardItem";


function Cards() {
  return (
    <div className={styles.cards}>
      <h1>Check out what we offer</h1>
      <div className={styles.cardsContainer}>
        <div className={styles.cardsWrapper}>
          <ul className={styles.cardsItems}>
            <CardItem
              src={process.env.PUBLIC_URL + "images/stoj.jpeg"}
              text="Check out our Gallery"
              label="Gallery"
              path="/services"
            />
             <CardItem
              src={process.env.PUBLIC_URL + "images/apartments1.png"}
              text="Check out our Gallery"
              label="Gallery"
              path="/contact"
            />
          </ul>
          <ul className={styles.cardsItems}>
            <CardItem
              src={process.env.PUBLIC_URL + "images/apartments2.jpg"}
              text="Check out our Gallery"
              label="Gallery"
              path="/services"
            />
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
