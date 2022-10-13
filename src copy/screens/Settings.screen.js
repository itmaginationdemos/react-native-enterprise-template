/* Libraries */
import React, {useContext} from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import RNRestart from 'react-native-restart';
import SplashScreen from 'react-native-splash-screen';
/* Local Files */
import {changeLanguage} from '../redux/ducks/language.js';
import {LocalizationContext} from '../redux/store.js';

const SettingsScreen = () => {
  const dispatch = useDispatch();
  const {t, locale, setLocale} = useContext(LocalizationContext);

  const onChangeLang = (selectedLang) => {
    if (selectedLang === 'ar' || locale === 'ar') {
      if (selectedLang !== locale) {
        SplashScreen.show();
        setLang(selectedLang);
        setTimeout(() => RNRestart.Restart(), 250);
        return;
      }
    }

    setLang(selectedLang);
  };

  const setLang = (selectedLang) => {
    dispatch(changeLanguage(selectedLang));
    setLocale(selectedLang);
  };

  return (
    <View style={s.container}>
      <Text style={s.text}>{t('helloWorld')}</Text>
      <View style={s.buttons}>
        <Button title="en" onPress={() => onChangeLang('en')} />
        <Button title="el" onPress={() => onChangeLang('el')} />
        <Button title="ar" onPress={() => onChangeLang('ar')} />
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  buttons: {
    width: '100%',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});

SettingsScreen.whyDidYouRender = true;

export default SettingsScreen;
