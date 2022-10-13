/* Libraries */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
/* Local Files */
import SettingsScreen from '../../screens/Settings.screen.js';
import {SETTINGS_SCREEN} from '../../constants/navigation.js';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SETTINGS_SCREEN} component={SettingsScreen} />
    </Stack.Navigator>
  );
};
