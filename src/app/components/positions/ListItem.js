import React from 'react';
import { View } from 'react-native';
import Button from '../common/content/Button';
import { Text } from '../common/content/Text';
import { listStyles } from '../../stylesheet';

export default function PositionListItem({ name, onRowClick }) {
  return (
    <View style={listStyles.listRow}>
      <Text style={listStyles.listRowMainPart} numberOfLines={1} ellipsizeMode="tail">{name}</Text>
      <Button
        icon={{ name: 'keyboard-arrow-right', style: listStyles.listRowGoIntoButtonIcon }}
        onPress={onRowClick}
        buttonStyle={listStyles.listRowGoIntoButton}
      />
    </View>
  );
}

PositionListItem.propTypes = {
  name: React.PropTypes.string,
  onRowClick: React.PropTypes.func,
};

PositionListItem.defaultProps = {
  name: '',
  onRowClick: () => {
  },
  onDelete: () => {
  },
};

