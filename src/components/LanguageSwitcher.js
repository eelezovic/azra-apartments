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
        <option value="me">🇲🇪 me</option>
        <option value="al">🇦🇱 al</option>
        <option value="en">🇬🇧 en</option>
        <option value="pl">🇵🇱 pl</option>
        <option value="ru">🇷🇺 ru</option> 
        <option value="de">🇩🇪 de</option>
        <option value="cz">🇨🇿 cz</option> 
      </select>
      <div className={styles["arrow-down"]} />
    </div>
  );
}

export default LanguageSwitcher;




