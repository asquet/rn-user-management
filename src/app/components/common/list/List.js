import React from 'react';
import { View, ListView, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import FilterHeading from './FilterHeading';
import Button from '../../common/Button';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  separator: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#c0c0c0',
  },
});

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
    <View style={{ backgroundColor: 'white' }}>
      <SwipeListView
        dataSource={dataSource}
        renderRow={rowData => renderListItem(rowData)}
        renderHiddenRow={(rowData, secId, rowId, rowMap) => (
          <TouchableHighlight
            onPress={() => {
              rowMap[`${secId}${rowId}`].closeRow();
              onDelete(rowData.id);
            }}
            style={{
              alignSelf: 'flex-end',
              backgroundColor: 'red',
              height: 50,
              padding: 10,
              width: 80,
            }}
          >
            <View>
              <Text style={{ color: 'white', fontSize: 18 }}>Delete</Text>
            </View>
          </TouchableHighlight>
        )}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        renderHeader={() => (<FilterHeading searchString={searchString} onChangeText={onSearch} />)}
        renderFooter={() => (<View style={{ height: 85 }} />)}
        rightOpenValue={-80}
      />
      {
        onAdd &&
        <Button
          buttonText="+"
          onPress={onAdd}
          bodyStyles={{
            position: 'absolute',
            bottom: 25,
            right: 25,
            backgroundColor: 'white',
            height: 60,
            width: 60,
            borderRadius: 30,
            justifyContent: 'center',
          }}
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
