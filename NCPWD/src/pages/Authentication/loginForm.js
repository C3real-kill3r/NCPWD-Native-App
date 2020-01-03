import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {compose} from 'redux';

import {loginUser} from '../../actions/auth.action';
import InputText from '../../components/InputText';

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
    fontFamily: 'sans-serif-light',
    fontWeight: '600',
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
  errorText: {
    color: 'rgb(255, 10, 10)',
    fontFamily: 'sans-serif-light',
    fontWeight: '800',
    paddingBottom: 8,
  },
});
class loginForm extends Component {
  signup() {
    Actions.signup();
  }

  restPass() {
    Actions.resetPassword();
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

  loginUsr = values => {
    this.props.dispatch(loginUser(values));
  };

  onSubmit = values => {
    this.loginUsr(values);
  };

  render() {
    const {handleSubmit} = this.props;
    return (
      <View style={styles.container}>
        <Field
          name="email"
          placeholder="Email"
          keyboardType="email-address"
          component={this.renderTextInput}
        />
        <Field
          name="password"
          placeholder="password"
          secureTextEntry={true}
          component={this.renderTextInput}
        />
        <TouchableOpacity onPress={this.restPass}>
          <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleSubmit(this.onSubmit)}>
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

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email is required';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  }
  return errors;
};

mapDispatchToProps = dispatch => ({
  dispatch,
});

export default compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  reduxForm({
    form: 'login',
    validate,
  }),
)(loginForm);
