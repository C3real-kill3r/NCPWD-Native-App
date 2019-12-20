import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class loginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email or username"
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={() => this.refs.password.focus()}
          placeholderTextColor="rgba(12, 16, 38, 0.8)"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          ref={'password'}
          placeholderTextColor="rgba(12, 16, 38, 0.8)"
          autoCorrect={false}
        />
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.textContainer}>
        <Text style={styles.signupText}>New here? Sign Up instead</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
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
  buttonContainer: {
    backgroundColor: '#44bd32',
    paddingVertical: 15,
    height: 50,
    marginTop: 15,
    borderRadius: 3,
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffff',
    fontFamily: 'sans-serif-thin',
    fontWeight: '700',
  },
  signupText: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    paddingVertical: 15,
    justifyContent: 'flex-end'
  },
  forgotPasswordText: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'right',
  },
});
