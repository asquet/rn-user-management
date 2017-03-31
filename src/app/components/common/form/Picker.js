import React from 'react';
import { Picker as ReactPicker, Platform } from 'react-native';
import { ButtonForDialog } from '../layout/ContentDialogs';

export class InnerPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: props.selectedValue,
    }
  }

  onValueChange = (selectedValue) => {
    this.props.onValueChange(selectedValue);
    this.setState({ selectedValue });
  };

  render() {
    return (
      <ReactPicker
        {...this.props}
        selectedValue={this.state.selectedValue}
        onValueChange={this.onValueChange}
      />
    );
  }
}

export default function Picker(props) {
  //const buttonText = props.
  if (Platform.OS === 'android') {
    return (
      <ReactPicker {...props} />
    );
  } else {
    return (
      <ButtonForDialog popupButtonText={props.popupButtonText}>
        <InnerPicker {...props} />
      </ButtonForDialog>
    );
  }
}

Picker.propTypes = {
  value: React.PropTypes.any,
  showDialog: React.PropTypes.func,
  hideDialog: React.PropTypes.func,
  popupButtonText: React.PropTypes.string,
};

Picker.defaultProps = {
  value: null,
  showDialog: () => {
  },
  hideDialog: () => {
  },
};
