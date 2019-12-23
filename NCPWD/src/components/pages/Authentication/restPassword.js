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
import InputText from '../../InputText';
import {Actions} from 'react-native-router-flux';
import {Field, reduxForm} from 'redux-form';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'rgba(12, 16, 38, 0.8)',
    justifyContent: 'center',
    alignContent: 'center',
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
    paddingVertical: 10,
  },
  resetContainer: {
    paddingHorizontal: 30,
  },
  buttonContainer: {
    flexGrow: 1,
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
});

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
                  source={require('../../../images/logo2.png')}
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
                  secureTextEntry={true}
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
