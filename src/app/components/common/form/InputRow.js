import React from 'react';
import { View, TextInput } from 'react-native';
import { Text } from '../content/Text';
import { formStyles } from '../../../stylesheet';

export default function InputRow(
  {
    value,
    label,
    onChange,
    wrapperStyles,
    children,
    ...props
  },
) {
  return (
    <View style={[formStyles.inputRowWrapper, wrapperStyles]}>
      <Text style={formStyles.inputRowLabel}>
        {label}
      </Text>
      {
        children ||
        <TextInput
          style={formStyles.inputRowInput}
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
  onChange: () => {
  },
  value: '',
  children: null,
  wrapperStyles: null,
};
