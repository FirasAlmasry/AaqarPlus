import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
// utils
import localStorageAvailable from '../utils/localStorageAvailable';
//
import { defaultLang } from './config-lang';
//
import BackEnd from "i18next-http-backend"
import enLocales from './langs/en/translation.json';
import arLocales from './langs/ar/translation.json';

// ----------------------------------------------------------------------

let lng = defaultLang.value;

const storageAvailable = localStorageAvailable();

if (storageAvailable) {
  lng = localStorage.getItem('i18nextLng') || defaultLang.value;
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(BackEnd)
  .init({
    resources: {
      en: { translations: enLocales },
      // fr: { translations: frLocales },
      // vi: { translations: viLocales },
      // cn: { translations: cnLocales },
      ar: { translations: arLocales },
    },
    lng,
    fallbackLng: defaultLang.value,
    // debug: false,
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["path", "localStorage", "htmlTag", "cookie"],
      caches: ["localStorage", "cookie"], // cache user language on
    },
    debug: true,
    // fallbackLng: 'ar',
    saveMissing: true,
    default: 'en',
    backend: {
      loadPath: '../locales/langs/{{lng}}/translation.json',
    },
  });

export default i18n;
