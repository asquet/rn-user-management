import React from 'react';
import { Button as TheirButton } from 'react-native-elements';
import { formStyles } from '../../../stylesheet';

export default function Button({ buttonStyle, ...props }) {
  return (
    <TheirButton buttonStyle={[formStyles.buttonBody, buttonStyle]} {...props} />
  );
}

Button.propTypes = {
  ...TheirButton.propTypes,
};

Button.defaultProps = {
  ...TheirButton.defaultProps,
};
