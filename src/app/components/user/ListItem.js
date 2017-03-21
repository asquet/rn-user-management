import React from 'react';
import { View, Text } from 'react-native';
import Button from '../common/Button';
import { userList, listStyles } from '../../stylesheet';
import Avatar from '../common/Avatar/Avatar';

export default function UserListItem({ name, userPic, onRowClick }) {
  return (
    <View style={listStyles.listRow}>
      <Avatar source={{ uri: userPic }} />
      <Text style={userList.userName} numberOfLines={1} ellipsizeMode="tail">{name}</Text>
      <Button buttonText={'>'} onPress={onRowClick} bodyStyles={{ width: 40 }} />
    </View>
  );
}

UserListItem.propTypes = {
  name: React.PropTypes.string,
  userPic: React.PropTypes.string,
  onRowClick: React.PropTypes.func,
};

UserListItem.defaultProps = {
  name: '',
  userPic: '',
  onRowClick: () => {
  },
  onDelete: () => {
  },
};

