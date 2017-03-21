import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import RolesList from './RolesList';
import withMenuAwareContext from '../../../../testUtility/withMenuAwareContext';
import suppressWarns from '../../../../testUtility/suppressWarns';

suppressWarns();

// Note: test renderer must be required after react-native.

describe('RolesList', () => {
  const roles = [
    { id: 1, name: 'user 1' },
    { id: 2, name: 'user 2' },
  ];
  it('renders correctly', () => {
    const Cmp = withMenuAwareContext(RolesList);
    const tree = renderer.create(
      <Cmp
        onSearch={jest.fn()}
        data={roles}
        searchString=""
        goToCreate={jest.fn()}
        goToEdit={jest.fn()}
      />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
