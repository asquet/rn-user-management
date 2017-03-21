import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Avatar from './Avatar';

// Note: test renderer must be required after react-native.

describe('Avatar', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Avatar />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
