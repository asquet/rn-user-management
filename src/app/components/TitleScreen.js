import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Button from './common/Button';

export const titleStyles = StyleSheet.create({
  appName: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default function TitleScreen({ proceed }) {
  return (
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
      <Text style={titleStyles.appName}>
        Hello!
      </Text>

      <Button buttonText="MoveOn" bodyStyle={{ width: 100 }} onPress={proceed} />
    </View>
  );
}

TitleScreen.propTypes = {
  proceed: React.PropTypes.func.isRequired,
};
