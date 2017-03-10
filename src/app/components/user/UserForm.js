import React from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';
import DatePicker from 'react-native-datepicker';
import ImagePicker from '../common/form/ImagePicker';
import Autocomplete from '../common/form/Autocomplete';
import InputRow from '../common/form/InputRow';
import Button from '../common/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  controlsWrapper: {
    flexDirection: 'row',
  },
  controlsSave: {
    flex: 1,
    borderColor: '#55dd66',
  },
  controlsCancel: {
    flex: 1,
    borderColor: '#dd5555',
  },
});

export default function UserForm({ isNew, user, onChange, onSave, onCancel, managers, positions }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        { isNew ? 'Create user' : 'EditUser'}
      </Text>
      <InputRow
        label="Name"
        value={user.name}
        onChange={val => onChange('name', val)}
      />

      <InputRow
        label="Birth date"
      >
        <DatePicker
          style={{ flex: 1 }}
          date={user.birthDate}
          mode="date"
          placeholder="Select Birth date"
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onDateChange={date => onChange('birthDate', date)}
        />
      </InputRow>
      <InputRow
        label="User Pic"

        onChange={val => onChange('userPic', val)}
      >
        <ImagePicker value={user.userPic} />
      </InputRow>
      <InputRow
        label="Manager"
      >
        <Autocomplete
          placeholder="Manager not selected"
          options={managers.map(m => ({ value: m.id, label: m.name }))}
          onChangeValue={val => onChange('managerId', val)}
          selection={user.managerId}
        />
      </InputRow>
      <InputRow
        label="Position"
        onChange={val => onChange('positionId', val)}
      >
        <Picker
          selectedValue={user.positionId}
          onValueChange={positionId => onChange('positionId', positionId)}
        >
          {
            positions.map(position => (
              <Picker.Item label={position.name} value={position.id} key={position.id} />
            ))
          }
        </Picker>
      </InputRow>

      <View style={styles.controlsWrapper}>
        <Button
          onPress={() => onSave(user)}
          buttonText="Save"
          bodyStyles={styles.controlsSave}
        />
        <Button
          onPress={onCancel}
          buttonText="Cancel"
          bodyStyles={styles.controlsCancel}
        />
      </View>
    </View>
  );
}

UserForm.propTypes = {
  isNew: React.PropTypes.bool.isRequired,
  user: React.PropTypes.shape({
    name: React.PropTypes.string,
    birthDate: React.PropTypes.string,
    userPic: React.PropTypes.string,
    managerId: React.PropTypes.number,
    positionId: React.PropTypes.number,
  }).isRequired,
  onChange: React.PropTypes.func.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired,
  managers: React.PropTypes.arrayOf(React.PropTypes.shape({})).isRequired,
  positions: React.PropTypes.arrayOf(React.PropTypes.shape({})).isRequired,
};
