import React from 'react';
import { View, Text } from 'react-native';
import { titleScreenStyles } from '../stylesheet';
import Button from '../components/common/Button';


export default function TitleScreen({ proceed }) {
  return (
    <View style={titleScreenStyles.container}>
      <Text style={titleScreenStyles.appName}>
        Hello!
      </Text>

      <Button buttonText="MoveOn" bodyStyle={{ width: 100 }} onPress={proceed} />
    </View>
  );
}

TitleScreen.propTypes = {
  proceed: React.PropTypes.func.isRequired,
};
