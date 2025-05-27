import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import Login from '../screens/Login';
import Header from '../components/Header'; // Import your custom header
import CustomDrawerContent from '../components/CustomDrawer/CustomDrawer';
import Community from '../screens/Community';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: true,
        drawerPosition: 'right',
      }}>
      <Drawer.Screen
        name="Main"
        component={BottomTabNavigator}
        options={{
          header: () => <Header />,
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Community}
        options={{
          header: () => <Header />,
        }}
      />
      <Drawer.Screen
        name="Orders"
        component={Community}
        options={{
          header: () => <Header />,
        }}
      />
      <Drawer.Screen
        name="Wallet"
        component={Community}
        options={{
          header: () => <Header />,
        }}
      />
      <Drawer.Screen
        name="Login"
        component={Login}
        options={{
          header: () => <Header />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
