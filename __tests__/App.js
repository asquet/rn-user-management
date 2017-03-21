import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/app/App';

// Note: test renderer must be required after react-native.

describe('Application', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <App />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
