import React, {Component} from 'react';
import {
  Text,
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
import {connect} from 'react-redux';
import {compose} from 'redux';

import {createNewUser} from '../../actions/auth.action';
import InputText from '../../components/InputText';
import Loader from '../../components/Loader';
import styles from './styles';


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

  createUser = values => {
    this.props.dispatch(createNewUser(values));
  };

  onSubmit = values => {
    this.createUser(values);
  };

  render() {
    const {handleSubmit, createUser} = this.props;
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
            {createUser.isLoading && <Loader />}
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
              <View style={styles.logoContainer}>
                <Image
                  source={require('../../images/logo2.png')}
                  style={styles.logo}
                />
                <Text style={styles.title}> Signup Information</Text>
              </View>
              <View style={styles.signupForm}>
                <View style={styles.nameContainer}>
                  <View style={styles.firstName}>
                    <Field
                      name="firstName"
                      placeholder="First Name"
                      component={this.renderTextInput}
                    />
                  </View>
                  <View style={styles.gap} />
                  <View style={styles.lastName}>
                    <Field
                      name="lastName"
                      placeholder="Last Name"
                      component={this.renderTextInput}
                    />
                  </View>
                </View>
                <Field
                  name="username"
                  placeholder="Username"
                  component={this.renderTextInput}
                />
                <Field
                  name="email"
                  placeholder="Email"
                  keyboardType="email-address"
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
  if (!values.firstName) {
    errors.firstName = 'First name is required';
  }
  if (!values.lastName) {
    errors.lastName = 'Last name is required';
  }
  if (!values.username) {
    errors.username = 'Username is required';
  }
  if (!values.email) {
    errors.email = 'Email is required';
  }
  if (!values.password) {
    errors.password = 'Name is required';
  }
  if (values.password !== values.cpassword) {
    errors.cpassword = 'Passwords do not match';
  }
  return errors;
};

mapStateToProps = (state) => ({
  createUser: state.authReducer.createUser
})

mapDispatchToProps = dispatch => ({
  dispatch,
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  reduxForm({
    form: 'signup',
    validate,
  }),
)(signup);
