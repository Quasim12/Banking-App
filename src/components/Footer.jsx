import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.footerBottom}>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate('Homee')}
        >
          <FontAwesome name="home" size={24} color="black" />
          <Text style={styles.footerItemText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate('AllPages')}
        >
          <FontAwesome name="file-text" size={24} color="black" />
          <Text style={styles.footerItemText}>Pages</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate('AllComponents')}
        >
          <FontAwesome name="plus" size={24} color="black" />
          <Text style={styles.footerItemText}>Components</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => console.log('Menu Pressed')}
        >
          <FontAwesome name="bars" size={24} color="black" />
          <Text style={styles.footerItemText}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate('CartArea')}
        >
          <FontAwesome name="credit-card" size={24} color="black" />
          <Text style={styles.footerItemText}>My Card</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  footerBottom: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-around',
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderColor: '#e7e7e7',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerItemText: {
    marginTop: 5,
    textAlign: 'center',
  },
});

export default Footer;
