import React from 'react';
import { View } from 'react-native';
import InputRow from '../common/form/InputRow';
import Button from '../common/content/Button';
import MultiSelect from '../common/form/MultiSelect';
import { Text, Heading } from '../common/content/Text';
import { formStyles } from '../../stylesheet';

export default function PositionForm({ isNew, position, onChange, onSave, onCancel, roles }) {
  return (
    <View style={formStyles.container}>
      <Heading>
        { isNew ? 'Create position' : 'Edit position'}
      </Heading>
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
