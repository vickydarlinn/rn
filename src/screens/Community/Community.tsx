import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Community = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Coming Soon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  text: {
    color: '#000000', // White text for contrast
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default Community;
