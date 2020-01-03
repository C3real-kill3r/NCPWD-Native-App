import React, {Component} from 'react';
import {Text, StyleSheet, View, StatusBar} from 'react-native';

import styles from './styles';

export default class profile extends Component {
  render() {
    return (
      <>
        <StatusBar
          backgroundColor="rgba(12, 16, 38, 0.8)"
          barStyle="dark-content"
        />
        <View style={styles.container} />
      </>
    );
  }
}
