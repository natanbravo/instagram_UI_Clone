import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image
        style={styles.logo}
        source={require('../img/logo.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
        style={styles.send}
        source={require('../img/send.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 55,
    backgroundColor: '#f4f4f4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomWidth: 0.2,
    borderBottomColor: '#ccc',
    shadowColor: '#121212',
    elevation: 2
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#121212',
    textAlign: 'center',
  },
  send:{
    width: 25,
    height:25,
  }
});
