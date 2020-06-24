import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import report from '../screens/report';
import home from '../screens/home';
import vitals from '../screens/vitals';
import DashboardScreen from '../screens/DashboardScreen';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const mainNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={home}
        options={{
          title: 'Home',
          tabBarIcon: (focused) => (
            <AntDesign focused={focused} name="home" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="vitals"
        component={vitals}
        options={{
          title: 'Vitals',
          tabBarIcon: (focused) => (
            <Feather
              focused={focused}
              name="activity"
              size={24}
              color="black"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default mainNavigation;
