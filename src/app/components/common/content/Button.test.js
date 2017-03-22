import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

// Note: test renderer must be required after react-native.

describe('Button', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Button buttonText="Button" onPress={jest.fn()} />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
