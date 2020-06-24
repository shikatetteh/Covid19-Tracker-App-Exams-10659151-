import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Cover from '../screens/cover';
import Info from '../screens/info';
import mainNavigation from '../navigation/mainNavigation';
import DashboardScreen from '../screens/DashboardScreen';
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cover"
        component={Cover}
        options={{
          title: 'Cover',
        }}
      />

      <Stack.Screen
        name="Information"
        component={Info}
        options={{
          title: 'General Information',
        }}
      />

      <Stack.Screen
        name="home"
        component={mainNavigation}
        options={{
          title: 'Tracker',
        }}
      />

      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          title: 'Dashboard',
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
