import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import PositionList from './PositionList';
import withMenuAwareContext from '../../../../testUtility/withMenuAwareContext';
import suppressWarns from '../../../../testUtility/suppressWarns';

suppressWarns();

// Note: test renderer must be required after react-native.

describe('PositionList', () => {
  it('renders correctly', () => {
    const positions = [
      { id: 1, name: 'pos1' },
      { id: 2, name: 'pos2' },
    ];
    const Cmp = withMenuAwareContext(PositionList);
    const tree = renderer.create(
      <Cmp
        goToCreate={jest.fn()}
        goToEdit={jest.fn()}
        positions={positions}
        onSearch={jest.fn()}
        searchString=""
      />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
