import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerLinks}>
        <div className={styles.footerLinkWrapper}>
          <div className={styles.footerLinkItems}>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
        <div className={styles.footerLinkWrapper}>
          <div className={styles.footerLinkItems}>
            <Link to="/services">About Us</Link>
          </div>
        </div>
      </div>
      <section className={styles.socialMedia}>
        <div className={styles.socialMediaWrap}>
          <div className={styles.socialIcons}>
            <Link
              className={`${styles.socialIconLink} facebook`}
              to="https://www.facebook.com/azrapartments"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className={`${styles.socialIconLink} instagram`}
              to="https://www.instagram.com/azraapartmani/?igshid=NzAzN2Q1NTE%3D"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
          </div>
        </div>
      </section>
      <div className={styles.currentYear}>
        <p> ©{currentYear} Emir Elezovic Get Coding</p>
      </div>
    </div>
  );
}

export default Footer;

