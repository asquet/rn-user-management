import { Text } from 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Menu from './Menu';

// Note: test renderer must be required after react-native.

describe('Menu', () => {
  it('renders correctly', () => {
    const menuItems = [
      {
        text: 'p1',
        onPress: () => {
        },
      },
    ];
    const tree = renderer.create(
      <Menu menuItems={menuItems}><Text>OK</Text></Menu>,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
