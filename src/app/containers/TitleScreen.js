import React from 'react';
import { titleScreenStyles } from '../stylesheet';
import { Text } from '../components/common/content/Text';
import Screen from '../components/common/layout/Screen';
import Button from '../components/common/content/Button';
import LinksList from '../components/common/list/LinksList/LinksList';

export default function TitleScreen({ proceed, menuItems }) {
  return (
    <Screen style={titleScreenStyles.container}>
      <Text style={titleScreenStyles.appName}>
        Hello, dear friend!
      </Text>

      <LinksList menuItems={menuItems} />

      <Button title="MoveOn" raised buttonStyle={titleScreenStyles.button} onPress={proceed} />
    </Screen>
  );
}

TitleScreen.propTypes = {
  proceed: React.PropTypes.func.isRequired,
  menuItems: React.PropTypes.arrayOf(React.PropTypes.shape({
    text: React.PropTypes.string,
    onPress: React.PropTypes.func,
  })).isRequired,
};
