import React from 'react';
import { View, Text } from 'react-native';
import InputRow from '../common/form/InputRow';
import Button from '../common/Button';
import { formStyles } from '../../stylesheet';

export default function PositionForm({ isNew, role, onChange, onSave, onCancel }) {
  return (
    <View style={formStyles.container}>
      <Text style={formStyles.header}>
        { isNew ? 'Create position' : 'Edit position'}
      </Text>
      <InputRow
        value={role.name}
        onChange={val => onChange('name', val)}
        label="Name"
      />
      <View style={formStyles.controlsWrapper}>
        <Button
          onPress={() => onSave(role)}
          buttonText="Save"
          bodyStyles={formStyles.controlsSave}
        />
        <Button
          onPress={onCancel}
          buttonText="Cancel"
          bodyStyles={formStyles.controlsCancel}
        />
      </View>
    </View>
  );
}


PositionForm.propTypes = {
  isNew: React.PropTypes.bool.isRequired,
  role: React.PropTypes.shape({
    name: React.PropTypes.string,
    roles: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.number,
      name: React.PropTypes.string,
    })),
  }).isRequired,
  onChange: React.PropTypes.func.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired,
};
