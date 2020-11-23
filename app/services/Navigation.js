import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from '~/components/Icon';
import * as theme from '~/styles/theme';
// Screens
import HomeScreen from '~/screens/Home';
import SearchScreen from '~/screens/Search';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: theme.colors.black,
        inactiveTintColor: theme.colors.grayLight,
        style: {
          borderTopColor: 'transparent',
          fontSize: 30,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Inicio'}}
      />

      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{title: 'Procurar'}}
      />
    </Tab.Navigator>
  );
}
