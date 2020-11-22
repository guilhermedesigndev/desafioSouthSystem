import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import * as theme from '~/styles/theme';

import Navigation from '~/services/Navigation';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.white} />
      <Navigation />
    </NavigationContainer>
  );
}
