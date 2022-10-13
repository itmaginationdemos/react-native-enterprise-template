/* Libraries */
import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
/* Local Files */
import HomeStack from '../stacks/Home.stack.js';
import SettingsStack from '../stacks/Settings.stack.js';
import {HOME_TAB, SETTINGS_TAB} from '../../constants/navigation.js';
import {LocalizationContext} from '../../redux/store.js';
import {FONT_AWESOME, IONICONS} from '../../constants/icons.js';
import {TabBarIcon} from '../../components/index.js';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const {t} = useContext(LocalizationContext);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={HOME_TAB}
        component={HomeStack}
        options={{
          title: t('home'),
          tabBarIcon: () => <TabBarIcon library={FONT_AWESOME} icon="home" />,
        }}
      />
      <Tab.Screen
        name={SETTINGS_TAB}
        component={SettingsStack}
        options={{
          title: t('settings'),
          tabBarIcon: () => (
            <TabBarIcon library={IONICONS} icon="settings-sharp" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
