import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonBody: {
    borderWidth: 1,
    borderColor: 'steelblue',
    borderRadius: 3,
    alignItems: 'center',
    padding: 5,
  },
  buttonText: {
    color: 'steelblue',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default function Button({ buttonText, onPress, bodyStyles }) {
  return (
    <TouchableOpacity style={[styles.buttonBody, bodyStyles]} onPress={onPress}>
      <Text style={styles.buttonText}>
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
