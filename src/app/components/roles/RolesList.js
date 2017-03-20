import React from 'react';
import EntityList from '../common/list/EntityList';
import ListItem from './ListItem';

export default function RolesList({ goToEdit, goToCreate, roles, ...props }) {
  return (
    <EntityList
      data={roles}
      onAdd={goToCreate}
      renderListItem={rowData => (
        <ListItem
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

RolesList.propTypes = {
  roles: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number,
    name: React.PropTypes.string,
  })).isRequired,
  goToCreate: React.PropTypes.func.isRequired,
  goToEdit: React.PropTypes.func.isRequired,
};

RolesList.defaultProps = EntityList.defaultProps;
