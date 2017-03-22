import { StyleSheet } from 'react-native';

export default function getListStyles(consts) {
  const rowHeight = 50;

  return StyleSheet.create({
    container: {
      flex: 1,
    },
    headingContainer: {
      flex: 1,
      paddingRight: 8,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: consts.backgroundColor,
    },
    headingInputContainer: {
      height: rowHeight,
      flex: 1,
      paddingTop: 3,
      paddingRight: 3,
      paddingBottom: 3,
      paddingLeft: 3,
      backgroundColor: consts.backgroundColor,
      margin: 0,
      borderTopWidth: 0,
      borderBottomWidth: 0,
    },
    headingInputText: {
      height: rowHeight - 6,
      flex: 1,
      fontSize: consts.fontSize,
      margin: 0,
      paddingBottom: 10,
      paddingLeft: 30,
      backgroundColor: '#DDD',
      color: '#555',
    },
    headingIconStyle: {
      top: (rowHeight - consts.fontSizeLarge) / 2,
      left: 8,
      fontSize: consts.fontSizeLarge,
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
      borderBottomColor: consts.borderColor,
    },
    deleteButton: {
      alignSelf: 'flex-end',
      backgroundColor: 'red',
      height: rowHeight,
      padding: 10,
      width: 80,
      flex: 0,
      borderRadius: 0,
      borderWidth: 0,
      marginRight: 0,
    },
    deleteButtonText: {
      color: 'white',
      fontSize: consts.fontSize,
    },
    addButton: { // move out under name FAB
      position: 'absolute',
      bottom: 25,
      right: 25,
      backgroundColor: consts.backgroundColor,
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
      backgroundColor: consts.backgroundColor,
      height: rowHeight,
    },
    listRowGoIntoButton: {
      width: rowHeight - 10,
      height: rowHeight - 10,
      paddingLeft: 5,
      paddingRight: 5,
      backgroundColor: consts.backgroundColor,
      borderWidth: 1,
      borderColor: consts.colorEmphasize,
    },
    listRowGoIntoButtonIcon: {
      marginRight: 0,
      fontSize: consts.fontSizeLarge,
      color: consts.color,
    },
    listRowMainPart: {
      overflow: 'hidden',
      flex: 1,
    },
    footer: {
      height: 85,
    },
  });
}
