import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import * as theme from '~/styles/theme';

import Navigation from '~/services/Navigation';
import store from '~/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={theme.colors.white}
        />
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}
