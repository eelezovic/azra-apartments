import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation(); 
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerLinks}>
        <div className={styles.footerLinkWrapper}>
          <div className={styles.footerLinkItems}>
            <Link to="/contact">{t('footer.contactUs')}</Link> 
          </div>
        </div>
        <div className={styles.footerLinkWrapper}>
          <div className={styles.footerLinkItems}>
            <Link to="/about">{t('footer.aboutUs')}</Link> 
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
        <p>©{currentYear} <a href="https://github.com/eelezovic">Emir Elezovic</a></p> 
      </div>
    </div>
  );
}

export default Footer;
