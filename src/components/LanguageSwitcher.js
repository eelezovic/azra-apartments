import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.css'; 

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button className={styles.countryFlag} onClick={() => changeLanguage('en')}>
        <span role="img" aria-label="English Flag">
          🇬🇧
        </span>
      </button>
      <button className={styles.countryFlag} onClick={() => changeLanguage('al')}>
        <span role="img" aria-label="Albanian Flag">
          🇦🇱
        </span>
      </button>
    </div>
  );
}

export default LanguageSwitcher;

