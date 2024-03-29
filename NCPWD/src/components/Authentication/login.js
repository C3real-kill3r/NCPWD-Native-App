import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import LoginForm from './loginForm';

export default class login extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor="rgba(12, 16, 38, 0.8)"
          barStyle="dark-content"
        />
        <TouchableWithoutFeedback
          style={styles.container}
          onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
              <View style={styles.logoContainer}>
                <Image
                  source={require('../../images/logo2.png')}
                  style={styles.logo}
                />
                <Text style={styles.title}> Account Information</Text>
              </View>
              <LoginForm />
            </KeyboardAvoidingView>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'rgba(12, 16, 38, 0.8)',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    height: 160,
    width: 160,
  },
  title: {
    fontFamily: 'sans-serif-thin',
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center',
    color: '#ffffff',
    paddingTop: 10,
  },
});
