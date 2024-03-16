// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import your translation files directly
import translationEN from './translation/en/global.json';
import translationAL from './translation/al/global.json';
import translationPL from './translation/pl/global.json'; 
import translationME from './translation/me/global.json'; 
import translationDE from './translation/de/global.json';
import translationRU from './translation/ru/global.json';
import translationCZ from './translation/cz/global.json';

// Resources object
const resources = {
  en: {
    translation: translationEN,
  },
  al: {
    translation: translationAL,
  },
  pl: {
    translation: translationPL,
  },
  me: {
    translation: translationME,
  },
  ru: {
    translation: translationRU,
  },
  de: {
    translation: translationDE,
  },
  cz: {
    translation: translationCZ,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'me', //  Montenegrin ('me') as the default language
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;


