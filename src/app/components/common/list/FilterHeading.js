import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C1C1C1',
  },
  input: {
    height: 40,
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
  },
});


export default function FilterHeading({ onChangeText, searchString }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Search..."
        value={searchString}
      />
    </View>
  );
}

FilterHeading.propTypes = {
  onChangeText: React.PropTypes.func.isRequired,
  searchString: React.PropTypes.string.isRequired,
};
