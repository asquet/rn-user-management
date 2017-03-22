import React from 'react';
import { View } from 'react-native';
import { layoutStyles } from '../../../stylesheet';

export default function Screen({ style, children }) {
  return (
    <View style={[layoutStyles.screen, style]}>
      {children}
    </View>
  );
}

Screen.propTypes = {
  children: React.PropTypes.node.isRequired,
  style: View.propTypes.style,
};

Screen.defaultProps = {
  style: null,
};
