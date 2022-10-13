/* Libraries */
import {I18nManager} from 'react-native';
import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import memoize from 'lodash.memoize';

// Load all translations
I18n.translations = {
  el: require('../locales/el.json'),
  en: require('../locales/en.json'),
  ar: require('../locales/ar.json'),
};

// Optimize memory with memoize
const translate = memoize(
  (key, config) => I18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

// Get language tag e.g. en or el
const {languageTag} = RNLocalize.findBestAvailableLanguage(
  Object.keys(I18n.translations),
);

// Configure i18n
const setI18nConfig = (language) => {
  let isRTL = language === 'ar';

  translate.cache.clear();
  I18nManager.forceRTL(isRTL);
  I18n.locale = language;
};

setI18nConfig(languageTag);

export {setI18nConfig, languageTag, I18n};
