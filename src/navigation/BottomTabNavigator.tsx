/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from '../screens/Home';
import Community from '../screens/Community';
import Store from '../screens/Store';
import Text from '../components/Text';

const Tab = createBottomTabNavigator();

// Custom tab bar icon component
const TabIcon = ({
  name,
  color,
  size,
  focused,
}: {
  name: string;
  color: string;
  size: number;
  focused: boolean;
}) => {
  return (
    <View
      style={{
        backgroundColor: focused ? '#FFD700' : 'transparent',
        borderRadius: focused ? 20 : 0,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Icon name={name} size={22} color={focused ? '#000' : color} />
    </View>
  );
};

// Custom tab label component
const TabLabel = ({label, focused}: {label: string; focused: boolean}) => {
  return (
    <Text
      style={{
        color: focused ? '#FFD700' : '#888',
        fontSize: 12,
        fontWeight: focused ? '600' : '400',
        marginTop: 2,
      }}>
      {label}
    </Text>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'rgba(26, 26, 26, 0.95)',
          borderTopColor: 'transparent',
          borderTopWidth: 0,
          height: 70,
          paddingBottom: 8,
          paddingTop: 8,
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          borderRadius: 25,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 8,
          elevation: 8,
        },
        tabBarActiveTintColor: '#FFD700',
        tabBarInactiveTintColor: '#888',
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '500',
          marginTop: 2,
        },
        tabBarItemStyle: {
          paddingVertical: 4,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <TabIcon name="home" color={color} size={22} focused={focused} />
          ),
          tabBarLabel: 'home',
        }}
      />

      <Tab.Screen
        name="Community"
        component={Community}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <TabIcon name="groups" color={color} size={22} focused={focused} />
          ),
          tabBarLabel: 'community',
        }}
      />

      <Tab.Screen
        name="Store"
        component={Store}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <TabIcon
              name="shopping-bag"
              color={color}
              size={22}
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
          tabBarIcon: ({color, size, focused}) => (
            <TabIcon name="pets" color={color} size={22} focused={focused} />
          ),
          tabBarLabel: 'petcare',
        }}
      />

      <Tab.Screen
        name="MyPets"
        component={Community}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <TabIcon
              name="list-alt"
              color={color}
              size={22}
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
