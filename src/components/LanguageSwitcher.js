import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.css';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className={styles.dropdown}>
      <select onChange={(e) => changeLanguage(e.target.value)} className={styles.select}>
        <option value="me">🇲🇪 cg</option>
        <option value="al">🇦🇱 al</option>
        <option value="en">🇬🇧 en</option>
        <option value="pl">🇵🇱 pl</option>
      </select>
      <div className={styles["arrow-down"]} />
    </div>
  );
}

export default LanguageSwitcher;




