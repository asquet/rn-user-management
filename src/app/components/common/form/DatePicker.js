import React from 'react';
import ForeignDatePicker from 'react-native-datepicker';
import { formStyles } from '../../../stylesheet';

export default function DatePicker({ ...props }) {
  return (
    <ForeignDatePicker style={formStyles.datePicker} {...props} />
  );
}
