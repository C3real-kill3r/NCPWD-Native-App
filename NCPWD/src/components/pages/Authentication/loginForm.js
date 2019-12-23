import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Field, reduxForm} from 'redux-form';

import InputText from '../../InputText';

class loginForm extends Component {
  signup() {
    Actions.signup();
  }

  renderTextInput = field => {
    const {
      meta: {touched, error},
      label,
      secureTextEntry,
      maxLength,
      keyboardType,
      placeholder,
      input: {onChange, ...restInput},
    } = field;
    return (
      <View>
        <InputText
          onChangeText={onChange}
          maxLength={maxLength}
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          label={label}
          {...restInput}
        />
        {touched && error && <Text style={styles.errorText}>{error}</Text>}
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Field
          name="email"
          placeholder="Email"
          component={this.renderTextInput}
        />
        <Field
          name="password"
          placeholder="password"
          secureTextEntry={true}
          component={this.renderTextInput}
        />
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.signupText}>New here?</Text>
          <TouchableOpacity>
            <Text style={styles.signupLink} onPress={this.signup}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
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
    justifyContent: 'flex-end',
  },
  forgotPasswordText: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'right',
  },
  textContainer: {
    paddingVertical: 15,
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupLink: {
    color: 'rgba(255, 255, 255, 0.5)',
    textAlign: 'center',
    paddingHorizontal: 5,
  },
});

export default reduxForm({
  form: 'login',
})(loginForm);
