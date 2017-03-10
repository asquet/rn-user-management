import { StyleSheet } from 'react-native';

export default function getUserListStyles(consts) {
  return StyleSheet.create({
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
}
