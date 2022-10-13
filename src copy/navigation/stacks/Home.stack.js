/* Libraries */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
/* Local Files */
import HomeScreen from '../../screens/Home.screen.js';
import {HOME_SCREEN} from '../../constants/navigation.js';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
    </Stack.Navigator>
  );
};
