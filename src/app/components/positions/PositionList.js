import React from 'react';
import EntityList from '../common/list/EntityList';
import PositionListItem from './ListItem';

export default function UserList({ goToEdit, positions, ...props }) {
  return (
    <EntityList
      data={positions}
      renderListItem={rowData => (
        <PositionListItem
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

UserList.propTypes = Object.assign({}, EntityList.propTypes, {
  goToEdit: React.PropTypes.func.isRequired,
});

UserList.defaultProps = EntityList.defaultProps;
