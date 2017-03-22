import { StyleSheet } from 'react-native';

export default function getFormStyles(consts) {
  const labelMarginBottom = 0;
  const labelHeight = consts.fontSizeSmall * 1.5;
  const inputHeight = 40;
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: consts.backgroundColor,
    },
    inputRowWrapper: {
      height: labelHeight + labelMarginBottom + inputHeight,
      padding: 3,
      marginBottom: 10,
    },
    inputRowLabel: {
      color: consts.color,
      fontSize: consts.fontSizeSmall,
      marginBottom: labelMarginBottom,
      height: labelHeight,
    },
    inputRowInput: {
      height: inputHeight,
      fontSize: consts.fontSize,
      borderBottomWidth: 1,
      borderColor: consts.borderColor,
    },
    controlsWrapper: {
      flexDirection: 'row',
    },
    controlsSave: {
      flex: 1,
      backgroundColor: '#33CC55',
    },
    controlsCancel: {
      flex: 1,
      backgroundColor: '#dd5555',
    },
    datePicker: {
      borderBottomWidth: 1,
      borderColor: consts.borderColor,
    },
    datePickerIcon: {},
    datePickerInput: {
      borderWidth: 0,
    },
    datePickerText: {
      fontSize: consts.fontSize,
    },
    buttonBody: {
      borderRadius: 3,
      alignItems: 'center',
      padding: 5,
    },
    imapgePickerWrapper: {
      flex: 1,
      flexDirection: 'row',
    },
    imagePickerReplaceText: {
      height: inputHeight,
      paddingTop: 5,
      color: consts.colorEmphasize,
    },
    imagePickerImage: {
      width: 40,
      height: 40,
      marginLeft: 10,
      marginRight: 10,
    },
  });
}
