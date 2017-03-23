import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import MenuButton from './MenuButton';

// Note: test renderer must be required after react-native.

describe('MenuButton', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <MenuButton />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
