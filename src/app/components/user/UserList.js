import React from 'react';
import EntityList from '../common/list/EntityList/EntityList';
import UserListItem from './ListItem';

export default function UserList({ goToEdit, goToCreate, users, ...props }) {
  return (
    <EntityList
      data={users}
      onAdd={goToCreate}
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
  goToCreate: React.PropTypes.func.isRequired,
  users: React.PropTypes.arrayOf(React.PropTypes.shape({})).isRequired,
};

