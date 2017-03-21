import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Autocomplete from './Autocomplete';

// Note: test renderer must be required after react-native.

describe('Autocomplete', () => {
  const options = [{
    value: 1,
    label: '1',
  }];

  it('renders correctly', () => {
    const tree = renderer.create(
      <Autocomplete onChangeValue={jest.fn()} options={options} />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
