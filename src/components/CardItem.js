import React from "react";
import styles from "./CardItem.module.css";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className={styles.cardsItem}>
        <Link className={styles.cardsItemLink} to={props.path}>
          <figure
            className={styles.cardsItemPictureWarp}
            data-category={props.label}
          >
            <img
              src={props.src}
              alt="Sunset"
              className={styles.cardsItemImage}
            />
          </figure>
          <div className={styles.cardsItemInfo}>
            <h5 className={styles.cardsItemText}> {props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
