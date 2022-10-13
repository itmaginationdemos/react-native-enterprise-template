/* Libraries */
import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
import React, {useMemo, useState} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
/* Local Files */
import {store, persistor, LocalizationContext} from './redux/store';
import AppNavigation from './navigation/index.js';
import {I18n, languageTag} from './utils/I18n.js';

enableScreens();

const Root = () => {
  const [locale, setLocale] = useState(languageTag);
  const localizationContext = useMemo(
    () => ({
      t: (scope, options) => I18n.t(scope, {locale, ...options}),
      locale,
      setLocale,
    }),
    [locale],
  );

  return (
    <LocalizationContext.Provider value={localizationContext}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigation />
        </PersistGate>
      </Provider>
    </LocalizationContext.Provider>
  );
};

export default Root;
