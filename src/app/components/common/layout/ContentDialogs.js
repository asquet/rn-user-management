import  React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../content/Button';
import { withDialogAware } from './Content';

const dialogStyles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 100,
    backgroundColor: 'white',
    borderColor: '#c0c0c0',
    borderWidth: 1,
    minWidth: 250,
    alignSelf: 'center',
    zIndex: 10,
  },
  commandPanel: {
    padding: 1
  },
  closeButton: {
    backgroundColor: 'transparent',
  }
});

export function DefaultDialog({ children, onHide }) {
  return (
    <View style={dialogStyles.wrapper}>
      <View style={dialogStyles.commandPanel}>
        <Button style={dialogStyles.closeButton} title="close" onPress={onHide} />
      </View>
      {children}
    </View>
  );
}

class ButtonForDialogInner extends React.Component {
  onBtnPress = () => {
    const {
      hideDialog, // eslint-disable-line
      showDialog, // eslint-disable-line
      children,
    } = this.props;

    showDialog(
      <DefaultDialog onHide={hideDialog} style={{ height: 300 }}>
        {React.cloneElement(children, {hideDialog})}
      </DefaultDialog>
    );
  };

  render() {
    return (
      <View>
        <Button title={this.props.popupButtonText || "Select value"} onPress={this.onBtnPress} />
      </View>
    );
  }
}

export const ButtonForDialog = withDialogAware(ButtonForDialogInner);
