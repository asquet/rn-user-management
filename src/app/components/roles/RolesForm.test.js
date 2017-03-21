import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import RolesForm from './RolesForm';

// Note: test renderer must be required after react-native.

describe('RolesForm', () => {
  it('renders correctly', () => {
    const role = { name: 'role' };
    const tree = renderer.create(
      <RolesForm
        onCancel={jest.fn()}
        onChange={jest.fn()}
        onSave={jest.fn()}
        isNew
        role={role}
      />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
