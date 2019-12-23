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
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {Actions} from 'react-native-router-flux';

export default class signup extends Component {
  login() {
    console.log("it working")
    Actions.pop();
  }

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
                  source={require('../../../images/logo2.png')}
                  style={styles.logo}
                />
                <Text style={styles.title}> Signup Information</Text>
              </View>
              <View style={styles.signupForm}>
                <TextInput
                  style={styles.input}
                  placeholder="Username"
                  returnKeyType="next"
                  onSubmitEditing={() => this.refs.name.focus()}
                  placeholderTextColor="rgba(12, 16, 38, 0.8)"
                  autoCorrect={false}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  keyboardType="email-address"
                  returnKeyType="next"
                  onSubmitEditing={() => this.refs.password.focus()}
                  ref={'name'}
                  placeholderTextColor="rgba(12, 16, 38, 0.8)"
                  autoCorrect={false}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry={true}
                  onSubmitEditing={() => this.refs.cpassword.focus()}
                  ref={'password'}
                  placeholderTextColor="rgba(12, 16, 38, 0.8)"
                  autoCorrect={false}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Confirm Password"
                  secureTextEntry={true}
                  ref={'cpassword'}
                  placeholderTextColor="rgba(12, 16, 38, 0.8)"
                  autoCorrect={false}
                />
                <TouchableOpacity style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                <View style={styles.loginTextContainer}>
                  <Text style={styles.loginText}>Already have an account?</Text>
                  <TouchableOpacity onPress={this.login}>
                    <Text style={styles.loginLink}>Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
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
    justifyContent: 'center',
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
    paddingBottom: 10,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    height: 40,
    marginBottom: 20,
    color: '#000000',
    paddingHorizontal: 10,
    fontFamily: 'sans-serif-thin',
    fontWeight: '600',
    borderRadius: 2,
  },
  signupForm: {
    paddingHorizontal: 30,
  },
  buttonContainer: {
    backgroundColor: '#44bd32',
    paddingVertical: 15,
    height: 50,
    borderRadius: 3,
  },
  buttonText: {
    textAlign: 'center',
    color: 'rgba(255, 255, 255 , 1)',
    fontFamily: 'sans-serif-thin',
    fontWeight: '700',
  },
  loginText: {
    color: '#ffff',
    fontFamily: 'sans-serif-light',
    fontWeight: '600',
    textAlign: 'center',
  },
  loginLink: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontFamily: 'sans-serif-light',
    fontWeight: '700',
    textAlign: 'center',
    paddingHorizontal: 5,
  },
  loginTextContainer: {
    paddingTop: 10,
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
