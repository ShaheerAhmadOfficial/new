import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
// import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  // .use(LanguageDetector) // ❌ disable detection (it causes "it" to come back)
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    debug: false,

    // ✅ force only English
    lng: 'en',
    fallbackLng: 'en',

    // ✅ only load en files
    supportedLngs: ['en'],

    load: 'languageOnly',
    interpolation: {
      escapeValue: false
    },

    returnObjects: true
  })

export default i18n
