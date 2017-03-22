import React from 'react';
import { View, ListView } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import FilterHeading from './FilterHeading';
import Button from '../../content/Button';
import { listStyles } from '../../../../stylesheet';

export default function List(
  {
    renderListItem,
    dataSource,
    onSearch,
    searchString,
    onAdd,
    onDelete,
  },
) {
  return (
    <View style={listStyles.container}>
      <SwipeListView
        dataSource={dataSource}
        renderRow={rowData => renderListItem(rowData)}
        renderHiddenRow={(rowData, secId, rowId, rowMap) => (
          <Button
            onPress={() => {
              rowMap[`${secId}${rowId}`].closeRow();
              onDelete(rowData.id);
            }}
            buttonStyle={listStyles.deleteButton}
            title="Delete"
          />
        )}
        renderSeparator={(sectionId, rowId) => (
          <View key={rowId} style={listStyles.listSeparator} />
        )}
        renderHeader={() => (<FilterHeading searchString={searchString} onChangeText={onSearch} />)}
        renderFooter={() => (<View style={listStyles.footer} />)}
        enableEmptySections
        rightOpenValue={-80}
      />
      {
        onAdd &&
        <Button
          title="+"
          color="blue"
          onPress={onAdd}
          buttonStyle={listStyles.addButton}
        />
      }
    </View>
  );
}

List.propTypes = {
  dataSource: React.PropTypes.instanceOf(ListView.DataSource).isRequired,
  renderListItem: React.PropTypes.func.isRequired,
  onSearch: React.PropTypes.func.isRequired,
  searchString: React.PropTypes.string.isRequired,
  onAdd: React.PropTypes.func,
  onDelete: React.PropTypes.func,
};

List.defaultProps = {
  onAdd: null,
  onDelete: null,
};
