import React from 'react';
import { View, Text } from 'react-native';
import Button from '../common/Button';
import { userList, listStyles } from '../../stylesheet';

export default function PositionListItem({ name, onRowClick }) {
  return (
    <View style={listStyles.listRow}>
      <Text style={userList.userName} numberOfLines={1} ellipsizeMode="tail">{name}</Text>
      <Button buttonText={'>'} onPress={onRowClick} bodyStyles={{ width: 40 }} />
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

