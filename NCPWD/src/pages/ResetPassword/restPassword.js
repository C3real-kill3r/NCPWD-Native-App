import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
  Image,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import InputText from '../../components/InputText';
import {Field, reduxForm} from 'redux-form';

import styles from './styles'


class restPassword extends Component {
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
                <Text style={styles.title}>
                  Enter email to receive reset link
                </Text>
              </View>
              <View style={styles.resetContainer}>
                <Field
                  name="email"
                  placeholder="Enter your email"
                  keyboardType="email-address"
                  component={this.renderTextInput}
                />
                <TouchableOpacity style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    );
  }
}

export default reduxForm({
  form: 'resetPassword',
})(restPassword);
