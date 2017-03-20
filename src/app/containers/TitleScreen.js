import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { titleScreenStyles, menuStyles } from '../stylesheet';
import Button from '../components/common/Button';

export default function TitleScreen({ proceed, menuItems }) {
  return (
    <View style={titleScreenStyles.container}>
      <Text style={titleScreenStyles.appName}>
        Hello!
      </Text>

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

      <Button buttonText="MoveOn" bodyStyle={{ width: 100 }} onPress={proceed} />
    </View>
  );
}

TitleScreen.propTypes = {
  proceed: React.PropTypes.func.isRequired,
  menuItems: React.PropTypes.arrayOf(React.PropTypes.shape({
    text: React.PropTypes.string,
    onPress: React.PropTypes.func,
  })).isRequired,
};
