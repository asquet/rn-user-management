import React from 'react';
import { titleScreenStyles } from '../stylesheet';
import { Text } from '../components/common/content/Text';
import Screen from '../components/common/layout/Screen';
import Button from '../components/common/content/Button';

export default function TitleScreen({ navigation }) {
  return (
    <Screen style={titleScreenStyles.container}>
      <Text style={titleScreenStyles.appName}>
        Hello, dear friend!
      </Text>

      <Button
        title="MoveOn"
        raised
        buttonStyle={titleScreenStyles.button}
        onPress={() => {
          navigation.navigate('Entities');
        }}
      />
    </Screen>
  );
}

TitleScreen.propTypes = {
  navigation: React.PropTypes.shape({
    navigate: React.PropTypes.func,
  }).isRequired,
};
