import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import PositionForm from './PositionForm';

// Note: test renderer must be required after react-native.

describe('PositionForm', () => {
  const position = { name: 'pos' };
  const roles = [{ id: 1, name: '1' }];

  it('renders correctly', () => {
    const tree = renderer.create(
      <PositionForm
        isNew
        onCancel={jest.fn()}
        onChange={jest.fn()}
        onSave={jest.fn()}
        position={position}
        roles={roles}
      />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
