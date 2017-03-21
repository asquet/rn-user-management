import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import InputRow from './InputRow';

// Note: test renderer must be required after react-native.

describe('InputRow', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <InputRow label="InputRow" />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
