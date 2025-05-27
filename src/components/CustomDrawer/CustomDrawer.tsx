// components/CustomDrawerContent.tsx

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = ({
  navigation,
}) => {
  return (
    <DrawerContentScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.closeDrawer()}
        style={styles.closeIcon}>
        <Text style={styles.closeText}>×</Text>
      </TouchableOpacity>

      <View style={styles.menuItems}>
        {['Main', 'Settings', 'Orders', 'Wallet'].map(item => (
          <TouchableOpacity
            key={item}
            onPress={() => navigation.navigate(item)}
            style={styles.menuItem}>
            <Text style={styles.menuText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  closeIcon: {
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  closeText: {
    fontSize: 60,
  },
  menuItems: {
    marginTop: 10,
    gap: 40,
    alignItems: 'center',
  },
  menuItem: {
    marginBottom: 30,
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#4B1E1E',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 40,
  },
  loginText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CustomDrawerContent;
