import React from 'react';
import { Text as TheirText } from 'react-native';
import { commonStyles } from '../../../stylesheet';

export function Text({ style, ...props }) {
  return (
    <TheirText style={[commonStyles.text, style]} {...props} />
  );
}

Text.propTypes = {
  ...TheirText.propTypes,
  style: TheirText.propTypes.style,
};

Text.defaultProps = {
  ...TheirText.defaultProps,
  style: null,
};

export function Heading({ style, ...props }) {
  return (
    <TheirText style={[commonStyles.heading, style]} {...props} />
  );
}

Heading.propTypes = { ...Text.propTypes };
Heading.defaultProps = { ...Text.defaultProps };

export function Hint({ style, ...props }) {
  return (
    <TheirText style={[commonStyles.hint, style]} {...props} />
  );
}
Hint.propTypes = { ...Text.propTypes };
Hint.defaultProps = { ...Text.defaultProps };
