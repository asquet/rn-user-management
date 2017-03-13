import React from 'react';
import { View, ListView, Text, TouchableHighlight } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import FilterHeading from './FilterHeading';
import Button from '../../common/Button';
import { commonStyles, listStyles } from '../../../stylesheet';

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
    <View style={commonStyles.container}>
      <SwipeListView
        dataSource={dataSource}
        renderRow={rowData => renderListItem(rowData)}
        renderHiddenRow={(rowData, secId, rowId, rowMap) => (
          <TouchableHighlight
            onPress={() => {
              rowMap[`${secId}${rowId}`].closeRow();
              onDelete(rowData.id);
            }}
            style={listStyles.deleteButton}
          >
            <View>
              <Text style={listStyles.deleteButtonText}>Delete</Text>
            </View>
          </TouchableHighlight>
        )}
        renderSeparator={(sectionId, rowId) => (
          <View key={rowId} style={listStyles.listSeparator} />
        )}
        renderHeader={() => (<FilterHeading searchString={searchString} onChangeText={onSearch} />)}
        renderFooter={() => (<View style={{ height: 85 }} />)}
        rightOpenValue={-80}
      />
      {
        onAdd &&
        <Button
          buttonText="+"
          onPress={onAdd}
          bodyStyles={listStyles.addButton}
        />
      }
    </View>
  );
}

List.propTypes = {
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
