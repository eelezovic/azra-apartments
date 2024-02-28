import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'; 
import styles from "./Navbar.module.css";
import LanguageSwitcher from './LanguageSwitcher'; 

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();

  const handleClick = () => setIsMobile(!isMobile);
  const closeMobileMenu = () => setIsMobile(false);

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
          <LanguageSwitcher />
          <ul className={`${styles.navMenu} ${isMobile ? styles.active : ""}`}>
            <li className={styles.navItem}>
              <Link to="/" className={styles.navLinks} onClick={closeMobileMenu}>
                {t('navbar.home')}
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/gallery" className={styles.navLinks} onClick={closeMobileMenu}>
                {t('navbar.gallery')}
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/contact" className={styles.navLinks} onClick={closeMobileMenu}>
                {t('navbar.contact')} 
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/about" className={styles.navLinks} onClick={closeMobileMenu}>
                {t('navbar.about')} 
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;


