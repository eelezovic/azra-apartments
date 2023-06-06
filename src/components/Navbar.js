import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { Button } from "./Button";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setIsMobile(!isMobile);
  const closeMobileMenu = () => setIsMobile(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <Link to="/" className={styles.navbarLogo} onClick={closeMobileMenu}>
            <img src={process.env.PUBLIC_URL + "/images/azra.JPG"} alt="Azra" />
          </Link>
          <div className={styles.menuIcon} onClick={handleClick}>
            <i className={isMobile ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={isMobile ? styles.navMenu + " " + styles.active : styles.navMenu}>
            <li className={styles.navItem}>
              <Link to="/" className={styles.navLinks} onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/services" className={styles.navLinks} onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/products" className={styles.navLinks} onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

