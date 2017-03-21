import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import UserList from './UserList';
import withMenuAwareContext from '../../../../testUtility/withMenuAwareContext';
import suppressWarns from '../../../../testUtility/suppressWarns';

suppressWarns();

// Note: test renderer must be required after react-native.

describe('UserList', () => {
  const users = [
    { id: 1, name: 'user 1' },
    { id: 2, name: 'user 2' },
  ];
  it('renders correctly', () => {
    const Cmp = withMenuAwareContext(UserList);

    const tree = renderer.create(
      <Cmp
        onSearch={jest.fn()}
        data={users}
        searchString=""
        goToCreate={jest.fn()}
        goToEdit={jest.fn()}
      />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
