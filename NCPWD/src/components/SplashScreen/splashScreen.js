import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, StatusBar} from 'react-native';

export default class splashScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="rgba(12, 16, 38, 0.8)"
          barStyle="dark-content"
        />
        <View style={styles.logoContainer}>
          <Image
            source={require('../../images/logo2.png')}
            style={styles.logo}
          />
          <Text style={styles.title}> It doesn't define who you are </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'rgba(12, 16, 38, 0.8)',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  title: {
    fontFamily: 'sans-serif-light',
    fontWeight: '800',
    fontSize: 20,
    paddingTop: 15,
  },
});
