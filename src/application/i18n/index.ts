import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Localization from 'expo-localization';
import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEn from './locales/en/en.json';
import translationRu from './locales/ru/ru.json';

const resources = {
  en: { translation: translationEn },
  ru: { translation: translationRu },
};

export const LANGUAGES = Object.keys(resources);

const i18n = createInstance();

const initI18n = async () => {
  let savedLanguage = (await AsyncStorage.getItem('language')) || undefined;

  if (!savedLanguage) {
    const deviceLanguage = Localization.getLocales()[0].languageCode;
    savedLanguage = deviceLanguage || 'ru';
  }

  await i18n.use(initReactI18next).init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false,
    },
  });
};

initI18n();

export default i18n;
