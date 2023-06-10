import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";


function Navbar() {
  const [isMobile, setIsMobile] = useState(false);


  const handleClick = () => setIsMobile(!isMobile);
  const closeMobileMenu = () => setIsMobile(false);


  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <Link to="/" className={styles.navbarLogo} onClick={closeMobileMenu}>
            <img
              src={process.env.PUBLIC_URL + "/images/azra.JPG"}
              alt="Azra"
            />
          </Link>
          <div className={styles.menuIcon} onClick={handleClick}>
            <i className={isMobile ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul
            className={`${styles.navMenu} ${isMobile ? styles.active : ""}`}
          >
            <li className={styles.navItem}>
              <Link
                to="/"
                className={styles.navLinks}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                to="/gallery"
                className={styles.navLinks}
                onClick={closeMobileMenu}
              >
                Gallery
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                to="/contact"
                className={styles.navLinks}
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                to="/about"
                className={styles.navLinks}
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

