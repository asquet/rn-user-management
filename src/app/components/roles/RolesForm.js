import React from 'react';
import { View } from 'react-native';
import InputRow from '../common/form/InputRow';
import Button from '../common/content/Button';
import { Heading } from '../common/content/Text';
import { formStyles } from '../../stylesheet';

export default function RolesForm({ isNew, role, onChange, onSave, onCancel }) {
  return (
    <View style={formStyles.container}>
      <Heading>
        { isNew ? 'Create role' : 'Edit role'}
      </Heading>
      <InputRow
        value={role.name}
        onChange={val => onChange('name', val)}
        label="Name"
      />
      <View style={formStyles.controlsWrapper}>
        <Button
          onPress={() => onSave(role)}
          title="Save"
          buttonStyle={formStyles.controlsSave}
        />
        <Button
          onPress={onCancel}
          title="Cancel"
          buttonStyle={formStyles.controlsCancel}
        />
      </View>
    </View>
  );
}


RolesForm.propTypes = {
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
