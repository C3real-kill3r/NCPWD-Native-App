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
  TouchableOpacity,
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import {Field, reduxForm} from 'redux-form';
import InputText from '../../InputText';



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
    paddingBottom: 20,
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
  errorText: {
    color: 'rgb(255, 10, 10)',
    fontFamily: 'sans-serif-light',
    fontWeight: '800',
    paddingBottom: 8,
  },
});

class signup extends Component {
  login() {
    Actions.pop();
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

  onSubmit = values => {
    console.log(values);
  };

  render() {
    const {handleSubmit} = this.props;
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
                <Field
                  name="name"
                  placeholder="Name"
                  component={this.renderTextInput}
                />
                <Field
                  name="email"
                  placeholder="Email"
                  component={this.renderTextInput}
                />
                <Field
                  name="password"
                  placeholder="Password"
                  secureTextEntry={true}
                  component={this.renderTextInput}
                />
                <Field
                  name="cpassword"
                  placeholder="Confirm password"
                  secureTextEntry={true}
                  component={this.renderTextInput}
                />
                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={handleSubmit(this.onSubmit)}>
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

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Name is required';
  }
  if (!values.email) {
    errors.email = 'Email is required';
  }
  if (!values.password) {
    errors.password = 'Name is required';
  }
  if(values.password !== values.cpassword){
    errors.cpassword = 'Passwords do not match';
  }
  return errors;
};

export default reduxForm({
  form: 'signup',
  validate,
})(signup);
