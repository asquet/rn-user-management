import React from 'react';
import { View, Text } from 'react-native';
import MultiSelect from 'react-native-multiselect';
import InputRow from '../common/form/InputRow';
import Button from '../common/Button';
import { formStyles } from '../../stylesheet';

export default function PositionForm({ isNew, position, onChange, onSave, onCancel, roles }) {
  return (
    <View style={formStyles.container}>
      <Text style={formStyles.header}>
        { isNew ? 'Create position' : 'Edit position'}
      </Text>
      <InputRow
        value={position.name}
        onChange={val => onChange('name', val)}
        label="Name"
      />
      <InputRow label="roles">
        <MultiSelect
          options={roles.map(role => ({ key: role.id, name: role.name }))}
          renderRow={(row, isSelected) => <Text>{row.name} {isSelected ? ' + ' : ' - '}</Text>}
          onSelectionChange={
            (selectedRow, allSelectedRows) => onChange('roles', allSelectedRows)
          }
          selectedOptions={position.roles}
          rowStyle={{ backgroundColor: 'skyblue' }}
        />
      </InputRow>
      <View style={formStyles.controlsWrapper}>
        <Button
          onPress={() => onSave(position)}
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
  position: React.PropTypes.shape({
    name: React.PropTypes.string,
    roles: React.PropTypes.arrayOf(React.PropTypes.number),
  }).isRequired,
  onChange: React.PropTypes.func.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired,
  roles: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number,
    name: React.PropTypes.string,
  })).isRequired,
};
