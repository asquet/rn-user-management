import React from 'react';
import { Image } from 'react-native';
import { commonStyles } from '../../stylesheet';

export default function Avatar({ source }) {
  return (
    <Image style={commonStyles.avatar} source={ (source && source.uri)? source : require('./defaultUserpic.png')} />
  );
}

Avatar.propTypes = {
  source: React.PropTypes.shape({}),
};

Avatar.defaultProps = {
  source: null,
};
