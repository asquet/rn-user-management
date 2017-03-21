import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import DatePicker from './DatePicker';

// Note: test renderer must be required after react-native.

describe('DatePicker', () => {

  it('renders correctly', () => {
    const date = new Date(123123);

    const tree = renderer.create(
      <DatePicker date={date} />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
