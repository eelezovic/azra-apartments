import React from "react";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";

const STYLES = ["button--primary", "button--outline"];
const SIZES = ["button--medium", "button--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="/home" className={styles.buttonMobile}>
      <button
        className={`${styles.button} ${styles[checkButtonStyle]} ${styles[checkButtonSize]}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};


