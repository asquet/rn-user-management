import React from 'react';
import { View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { listStyles } from '../../../../stylesheet';
import MenuButton from '../../content/MenuButton';


export default function FilterHeading({ onChangeText, searchString }) {
  return (
    <View style={listStyles.headingContainer}>
      <SearchBar
        containerStyle={listStyles.headingInputContainer}
        inputStyle={listStyles.headingInputText}
        icon={{ style: listStyles.headingIconStyle }}
        onChangeText={onChangeText}
        placeholder="Search..."
        value={searchString}
      />

      <MenuButton />
    </View>
  );
}

FilterHeading.propTypes = {
  onChangeText: React.PropTypes.func.isRequired,
  searchString: React.PropTypes.string.isRequired,
};
