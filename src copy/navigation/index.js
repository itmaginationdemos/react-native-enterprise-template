/* Libraries */
import React, {useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useReduxDevToolsExtension} from '@react-navigation/devtools';
/* Local Files */
import BottomTabs from './tabs/Bottom.tab.js';

const AppNavigation = () => {
  const navigationRef = useRef();
  useReduxDevToolsExtension(navigationRef);

  return (
    <NavigationContainer ref={navigationRef}>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default AppNavigation;
