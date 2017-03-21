import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import MenuButton from './MenuButton';
import withMenuAwareContext from '../../../../testUtility/withMenuAwareContext';

// Note: test renderer must be required after react-native.

describe('MenuButton', () => {
  it('renders correctly', () => {
    const Cmp = withMenuAwareContext(MenuButton);
    const tree = renderer.create(
      <Cmp />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
