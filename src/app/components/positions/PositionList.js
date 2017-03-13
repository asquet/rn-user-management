import React from 'react';
import EntityList from '../common/list/EntityList';
import PositionListItem from './ListItem';

export default function UserList({ goToEdit, goToCreate, positions, ...props }) {
  return (
    <EntityList
      data={positions}
      onAdd={goToCreate}
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

UserList.propTypes = {
  positions: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number,
    name: React.PropTypes.string,
  })).isRequired,
  goToCreate: React.PropTypes.func.isRequired,
  goToEdit: React.PropTypes.func.isRequired,
};

UserList.defaultProps = EntityList.defaultProps;
