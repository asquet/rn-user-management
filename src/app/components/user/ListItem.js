import React from 'react';
import { View } from 'react-native';
import Button from '../common/content/Button';
import { Text } from '../common/content/Text';
import { userList, listStyles } from '../../stylesheet';
import Avatar from '../common/content/Avatar/Avatar';

export default function UserListItem({ name, userPic, onRowClick }) {
  return (
    <View style={listStyles.listRow}>
      <Avatar source={{ uri: userPic }} />
      <Text
        style={[listStyles.listRowMainPart, userList.userName]}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {name}
      </Text>

      <Button
        icon={{ name: 'keyboard-arrow-right', style: listStyles.listRowGoIntoButtonIcon }}
        onPress={onRowClick}
        buttonStyle={listStyles.listRowGoIntoButton}
      />
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

