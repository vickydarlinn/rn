import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

type HeaderProps = {
  title?: string;
  logoSource?: any;
};

const Header: React.FC<HeaderProps> = ({title, logoSource}) => {
  return (
    <View style={styles.container}>
      <Image
        source={logoSource || require('../../assets/icons/logo-marshee.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      {title && <Text style={styles.title}>{title}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 12,
  },
});

export default Header;
