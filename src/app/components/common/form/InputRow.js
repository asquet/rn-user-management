import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    height: 50,
    padding: 3,
  },
  input: {
    flex: 1,
  },
});

export default function InputRow({ value, label, onChange, wrapperStyles, children, ...props }) {
  return (
    <View style={[styles.wrapper, wrapperStyles]}>
      {
        children ||
        <TextInput
          style={styles.input}
          placeholder={label}
          onChangeText={onChange}
          value={value}
          {...props}
        />
      }
    </View>
  );
}

InputRow.propTypes = {
  value: React.PropTypes.string,
  label: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func,
  children: React.PropTypes.node,
  wrapperStyles: React.PropTypes.shape({}),
};

InputRow.defaultProps = {
  onChange: () => {},
  value: '',
  children: null,
  wrapperStyles: null,
};
