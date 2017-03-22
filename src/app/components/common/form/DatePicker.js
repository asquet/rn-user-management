import React from 'react';
import ForeignDatePicker from 'react-native-datepicker';
import { View } from 'react-native';
import { formStyles } from '../../../stylesheet';

export default function DatePicker({ style, ...props }) {
  return (
    <ForeignDatePicker
      style={[formStyles.datePicker, style]}
      customStyles={{
        dateIcon: formStyles.datePickerIcon,
        dateInput: formStyles.datePickerInput,
        dateText: formStyles.datePickerText,
      }}
      {...props}
    />
  );
}

DatePicker.propTypes = {
  style: View.propTypes.style,
};

DatePicker.defaultProps = {
  style: null,
};
