import React from 'react';
import EntityList from '../common/list/EntityList';
import UserListItem from './ListItem';

export default function UserList({ goToEdit, users, ...props }) {
  return (
    <EntityList
      data={users}
      renderListItem={rowData => (
        <UserListItem
          {...rowData}
          onRowClick={() => {
            goToEdit(rowData.id);
          }}
        />
      )}
      {...props}
    />
  );
}

UserList.propTypes = {
  goToEdit: React.PropTypes.func.isRequired,
  users: React.PropTypes.arrayOf(React.PropTypes.shape({})).isRequired,
};

