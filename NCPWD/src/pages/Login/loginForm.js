import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {compose} from 'redux';

import {loginUser} from '../../actions/auth.action';
import InputText from '../../components/InputText';
import styles from './loginForm.styles';

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
