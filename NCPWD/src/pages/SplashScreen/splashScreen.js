import React, {Component} from 'react';
import {Text, View, Image, StatusBar} from 'react-native';

import styles from './styles';

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
