import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { menuStyles } from '../../../../stylesheet';

export default function LinksList({ menuItems }) {
  return (
    <View style={menuStyles.listContainer}>
      {
        menuItems.map(item => (
          <TouchableOpacity
            onPress={item.onPress}
            key={item.text}
            style={menuStyles.menuItemButton}
          >
            <Text style={menuStyles.menuItemText}>{item.text}</Text>
          </TouchableOpacity>
        ))
      }
    </View>
  );
}

LinksList.propTypes = {
  menuItems: React.PropTypes.arrayOf(React.PropTypes.shape({
    onPress: React.PropTypes.func,
    text: React.PropTypes.string,
  })).isRequired,
};
