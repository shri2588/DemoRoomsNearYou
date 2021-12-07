/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from './Login';
import About from './About';
const Tab = createBottomTabNavigator();

const TabScreen = () => {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Login') {
              iconName = focused
                ? 'add-circle'
                : 'add-circle';
            } else if (route.name === 'About') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
    );
};

export default TabScreen;
