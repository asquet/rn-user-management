import React from 'react';
import { ListView } from 'react-native';
import List from '../common/list/List';
import UserListItem from './ListItem';

function getUsersDs(users) {
  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  return ds.cloneWithRows(users);
}

export default function UserList(
  {
    users,
    onSearch,
    searchString,
    goToEdit,
    goToCreate,
    onDelete,
  },
) {
  return (
    <List
      renderListItem={rowData => (
        <UserListItem
          {...rowData}
          onRowClick={() => {
            goToEdit(rowData.id);
          }}
        />
      )}
      dataSource={getUsersDs(users)}
      onSearch={onSearch}
      searchString={searchString}
      onRowClick={rowData => goToEdit(rowData.id)}
      onAdd={goToCreate}
      onDelete={onDelete}
    />
  );
}

UserList.propTypes = {
  users: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string,
  })).isRequired,
  onSearch: React.PropTypes.func.isRequired,
  searchString: React.PropTypes.string.isRequired,
  goToEdit: React.PropTypes.func,
  goToCreate: React.PropTypes.func,
  onDelete: React.PropTypes.func,
};

UserList.defaultProps = {
  goToEdit: () => {
  },
  goToCreate: () => {
  },
  onDelete: () => {
  },
};
