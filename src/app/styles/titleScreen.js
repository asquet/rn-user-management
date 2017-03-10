import { StyleSheet } from 'react-native';

export default function getTitleScreenStyles(consts) {
  return StyleSheet.create({
    appName: {
      fontSize: 30,
      fontWeight: 'bold',
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
  });
}
