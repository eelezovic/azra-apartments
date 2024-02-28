import React from "react";
import styles from "./HeroComponent.module.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'; 

function HeroComponent() {
  const { t } = useTranslation(); 

  return (
    <div className={styles.heroContainer}>
      <img src={process.env.PUBLIC_URL + "/images/background.jpg"} alt="Background" className={styles.backgroundImage} />
      <h1>{t('hero.welcome')}</h1>
      <div className={styles.heroButton}>
        <Button className={styles.buttons} buttonStyle="button--outline" buttonSize="button--large">
          <Link to="/contact" className={styles.contactLink}>
            {t('contactUs')} 
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default HeroComponent;



