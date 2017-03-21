import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ImagePicker from './ImagePicker';

// Note: test renderer must be required after react-native.

describe('ImagePicker', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <ImagePicker />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
