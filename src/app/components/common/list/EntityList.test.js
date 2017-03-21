import { Text } from 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import EntityList from './EntityList';
import withMenuAwareContext from '../../../../../testUtility/withMenuAwareContext';
import suppressWarns from '../../../../../testUtility/suppressWarns';

suppressWarns();

describe('EntityList', () => {
  const data = [
    { id: 1, name: 'name 1' },
  ];

  it('renders correctly', () => {
    const Cmp = withMenuAwareContext(EntityList);
    const tree = renderer.create(
      <Cmp
        data={data}
        renderListItem={rowData => (<Text key={rowData.id}>{rowData.id} {rowData.name}</Text>)}
        onSearch={jest.fn()}
        searchString=""
      />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
