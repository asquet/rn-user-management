import { StyleSheet } from 'react-native';

export default function getFormStyles({ backgroundColor }) {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor,
    },
    header: {
      fontSize: 30,
      fontWeight: 'bold',
    },
    controlsWrapper: {
      flexDirection: 'row',
    },
    controlsSave: {
      flex: 1,
      borderColor: '#55dd66',
    },
    controlsCancel: {
      flex: 1,
      borderColor: '#dd5555',
    },
    datePicker: {
      flex: 1,
    },
    buttonBody: {
      borderWidth: 1,
      borderColor: 'steelblue',
      borderRadius: 3,
      alignItems: 'center',
      padding: 5,
    },
    buttonText: {
      color: 'steelblue',
      fontSize: 20,
      fontWeight: 'bold',
    },
  });
}
