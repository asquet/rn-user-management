import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { formStyles } from '../../stylesheet';

export default function Button({ buttonText, onPress, bodyStyles }) {
  return (
    <TouchableOpacity style={[formStyles.buttonBody, bodyStyles]} onPress={onPress}>
      <Text style={formStyles.buttonText}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  buttonText: React.PropTypes.string.isRequired,
  onPress: React.PropTypes.func.isRequired,
  bodyStyles: Text.propTypes.style,
};

Button.defaultProps = {
  bodyStyles: null,
};
