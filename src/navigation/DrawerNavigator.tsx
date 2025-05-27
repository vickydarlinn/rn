import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import Settings from '../screens/Settings';
import Login from '../screens/Login';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen
        name="Main"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
