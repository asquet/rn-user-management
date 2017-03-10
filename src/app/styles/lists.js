import { StyleSheet } from 'react-native';

export default function getListStyles({ backgroundColor }) {
  return StyleSheet.create({
    headingContainer: {
      flex: 1,
      padding: 8,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#C1C1C1',
    },
    headingInput: {
      height: 40,
      flex: 1,
      paddingHorizontal: 8,
      fontSize: 15,
      backgroundColor,
      borderRadius: 2,
    },
    listContainer: {
      flexDirection: 'column',
      flex: 1,
      marginTop: 10,
      marginBottom: 10,
    },
    listSeparator: {
      flex: 1,
      borderBottomWidth: 1,
      borderBottomColor: '#c0c0c0',
    },
    deleteButton: {
      alignSelf: 'flex-end',
      backgroundColor: 'red',
      height: 50,
      padding: 10,
      width: 80,
    },
    deleteButtonText: { color: 'white', fontSize: 18 },
    addButton: {
      position: 'absolute',
      bottom: 25,
      right: 25,
      backgroundColor: 'white',
      height: 60,
      width: 60,
      borderRadius: 30,
      justifyContent: 'center',
    },
    listRow: {
      flex: 1,
      alignItems: 'center',
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 5,
      paddingRight: 15,
      flexDirection: 'row',
      backgroundColor: 'white',
    },
  });
}