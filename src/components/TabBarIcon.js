/* Libraries */
import React from 'react';
import {Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
/* Local Files */
import colors from '../theme/colors.js';
import {FONT_AWESOME, IONICONS} from '../constants/icons.js';

const TabBarIcon = ({library, icon}) => {
  switch (library) {
    case FONT_AWESOME:
      return <FontAwesome name={icon} size={30} color={colors.primary} />;
    case IONICONS:
      return <Ionicons name={icon} size={30} color={colors.primary} />;
    default:
      return <Text>Error please select library</Text>;
  }
};

export default TabBarIcon;
