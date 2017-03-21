import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import UserForm from './UserForm';

// Note: test renderer must be required after react-native.

describe('UserForm', () => {
  const positions = [{ id: 1, name: '1' }];
  const managers = [{ id: 1, name: '1' }];
  const user = { name: 'user', birthDate: '2000-10-10' };
  it('renders correctly', () => {
    const tree = renderer.create(
      <UserForm
        positions={positions}
        onSave={jest.fn()}
        onChange={jest.fn()}
        isNew managers={managers}
        onCancel={jest.fn()}
        user={user}
      />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
