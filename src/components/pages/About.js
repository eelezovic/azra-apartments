import React from "react";
import styles from "./About.module.css";
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <div className={styles.about}>
      <h1 className={styles.heading}>{t('about.title')}</h1>
      <div className={styles.aboutWrap}>
        <p>{t('about.content')}</p>
      </div>
    </div>
  );
}

export default About;
