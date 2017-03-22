import { StyleSheet } from 'react-native';

export default function getBasicStyles(consts) {
  return StyleSheet.create({
    screen: {
      backgroundColor: consts.backgroundColor,
    },
  });
}
