import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {TextInput, Text, View, StyleSheet} from 'react-native';

const propTypes = {
  mapElement: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  onChangeText: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  label: PropTypes.string,
};

const defaultProps = {
  mapElement: n => {},
  onSubmitEditing: () => {},
  onChangeText: () => {},
  value: '',
  placeholder: '',
  maxLength: 200,
  keyboardType: 'default',
  secureTextEntry: false,
  label: '',
};

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    height: 40,
    marginBottom: 20,
    color: '#000000',
    paddingHorizontal: 10,
    fontFamily: 'sans-serif-thin',
    fontWeight: '600',
    borderRadius: 2,
  },
});

class InputText extends Component<{}> {
  state = {
    value: '',
  };

  componentDidMount() {
    this.setState({
      value: this.props.value,
    });
  }

  onChangeText = value => {
    this.setState(
      {
        value,
      },
      () => {
        this.props.onChangeText(value);
      },
    );
  };

  render() {
    const {
      placeholder,
      secureTextEntry,
      keyboardType,
      maxLength,
      value,
      onChangeText,
      onSubmitEditing,
    } = this.props;
    return (
      <View>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder={placeholder}
          placeholderTextColor="rgba(0, 0, 0, 0.88)"
          selectionColor="#999999"
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          maxLength={maxLength}
          returnKeyType="next"
          value={this.state.value}
          onSubmitEditing={onSubmitEditing}
          onChangeText={this.onChangeText}
        />
      </View>
    );
  }
}

InputText.defaultProps = defaultProps;

InputText.propTypes = propTypes;

export default InputText;