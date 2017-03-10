import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Button from '../common/Button';

const styles = StyleSheet.create({
  row: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 15,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  userPic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  userName: {
    fontSize: 20,
    overflow: 'hidden',
    flex: 1,
  },
});

export default function UserListItem({ name, userPic, onRowClick, onDelete }) {
  return (
    <View style={styles.row}>
      <Image style={styles.userPic} source={{ uri: userPic }} />
      <Text style={styles.userName} numberOfLines={1} ellipsizeMode="tail">{name}</Text>
      <Button buttonText={'>'} onPress={onRowClick} bodyStyles={{ width: 40 }} />
    </View>
  );
}

UserListItem.propTypes = {
  name: React.PropTypes.string,
  userPic: React.PropTypes.string,
  onRowClick: React.PropTypes.func,
  onDelete: React.PropTypes.func,
};

UserListItem.defaultProps = {
  name: '',
  userPic: '',
  onRowClick: () => {
  },
  onDelete: () => {
  },
};

