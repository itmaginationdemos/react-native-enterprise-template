/* Libraries */
import React, {useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Button,
  I18nManager,
  SafeAreaView,
} from 'react-native';
import {useSelector} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {v4 as uuid} from 'uuid';
/* Local Files */
import colors from '../theme/colors.js';
import {setI18nConfig} from '../utils/I18n.js';
import {LocalizationContext} from '../redux/store.js';
import {getLanguage} from '../redux/ducks/language.js';

const HomeScreen = () => {
  const {t, locale, setLocale} = useContext(LocalizationContext);
  const [id, setId] = useState(uuid());
  const language = useSelector((state) => getLanguage(state));

  setI18nConfig(locale);

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 250);
  }, []);

  useEffect(() => {
    setLocale(language);
  }, [language, setLocale]);

  const onGenerateID = () => {
    setId(uuid());
  };

  return (
    <SafeAreaView style={s.safeAreaView}>
      <StatusBar
        backgroundColor={colors.statusBar}
        barStyle={'light-content'}
      />
      <View style={s.container}>
        <Text style={s.text}>{t('helloWorld')}</Text>
        <Icon style={s.icon} name="windows" size={30} color={colors.primary} />
        <Text style={s.text}>{id}</Text>
        <Button title={t('generateId')} onPress={onGenerateID} />
      </View>
    </SafeAreaView>
  );
};

const s = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
  icon: {
    transform: [
      {
        scaleX: I18nManager.isRTL ? -1 : 1,
      },
    ],
  },
});

HomeScreen.whyDidYouRender = true;

export default HomeScreen;
