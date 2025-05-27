import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';

type HeaderProps = {
  title?: string;
  logoSource?: any;
};

const Header: React.FC<HeaderProps> = ({title, logoSource}) => {
  const navigation = useNavigation<DrawerNavigationProp<any>>();

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <Image
        source={logoSource || require('../../assets/icons/logo-marshee.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      {title && <Text style={styles.title}>{title}</Text>}

      {/* Hamburger Menu Button */}
      <TouchableOpacity style={styles.menuButton} onPress={openDrawer}>
        <View style={styles.hamburgerLine} />
        <View style={styles.hamburgerLine} />
        <View style={styles.hamburgerLine} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f9fa',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 16,
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 12,
    flex: 1,
  },
  menuButton: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
  },
  hamburgerLine: {
    width: 25,
    height: 3,
    backgroundColor: '#333',
    marginVertical: 2,
    borderRadius: 2,
  },
});

export default Header;
