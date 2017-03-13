import React from 'react';
import { View, TextInput } from 'react-native';
import { listStyles } from '../../../stylesheet';
import MenuButon from '../MenuButton';

export default function FilterHeading({ onChangeText, searchString }) {
  return (
    <View style={listStyles.headingContainer}>
      <TextInput
        style={listStyles.headingInput}
        onChangeText={onChangeText}
        placeholder="Search..."
        value={searchString}
      />
      <MenuButon />
    </View>
  );
}

FilterHeading.propTypes = {
  onChangeText: React.PropTypes.func.isRequired,
  searchString: React.PropTypes.string.isRequired,
};
