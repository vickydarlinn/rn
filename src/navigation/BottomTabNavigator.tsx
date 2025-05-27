/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Image, StyleSheet} from 'react-native';
import Home from '../screens/Home';
import Community from '../screens/Community';
import Store from '../screens/Store';

const Tab = createBottomTabNavigator();

// Reusable Tab Icon with custom image
const TabIcon = ({source, focused}: {source: any; focused: boolean}) => {
  return (
    <View
      style={{
        borderRadius: 12,
        width: 60,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5,
      }}>
      <Image
        source={source}
        style={{
          width: 30,
          height: 30,
          resizeMode: 'contain',
          paddingBottom: 5,
        }}
      />
    </View>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#A7BCFD',
          borderTopColor: 'transparent',
          height: 70,
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          borderRadius: 20,
          paddingBottom: 8,
          paddingTop: 8,
          elevation: 6,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 4},
          shadowOpacity: 0.25,
          shadowRadius: 8,
        },
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '600',
          color: '#140083',
          textAlign: 'center',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              source={require('../assets/icons/home-button1.png')}
              focused={focused}
            />
          ),
          tabBarLabel: 'home',
        }}
      />
      <Tab.Screen
        name="Community"
        component={Community}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              source={require('../assets/icons/community.png')}
              focused={focused}
            />
          ),
          tabBarLabel: 'community',
        }}
      />
      <Tab.Screen
        name="Store"
        component={Store}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              source={require('../assets/icons/marketplace.png')}
              focused={focused}
            />
          ),
          tabBarLabel: 'store',
        }}
      />
      <Tab.Screen
        name="PetCare"
        component={Community}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              source={require('../assets/icons/services.png')}
              focused={focused}
            />
          ),
          tabBarLabel: 'petcare',
        }}
      />
      <Tab.Screen
        name="MyPets"
        component={Community}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              source={require('../assets/icons/mypets.png')}
              focused={focused}
            />
          ),
          tabBarLabel: 'my Pets',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
