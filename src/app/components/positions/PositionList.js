import React from 'react';
import EntityList from '../common/list/EntityList/EntityList';
import PositionListItem from './ListItem';

export default function PositionsList({ goToEdit, goToCreate, positions, ...props }) {
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

PositionsList.propTypes = {
  positions: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number,
    name: React.PropTypes.string,
  })).isRequired,
  goToCreate: React.PropTypes.func.isRequired,
  goToEdit: React.PropTypes.func.isRequired,
};

PositionsList.defaultProps = EntityList.defaultProps;
