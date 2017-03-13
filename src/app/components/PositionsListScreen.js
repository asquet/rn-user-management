import { connect } from 'react-redux';
import PositionList from './positions/PositionList';
import { actions as uiActions } from '../redux/ui/positionList';
import { actions as entityActions } from '../redux/entity/positions';

function mapStateToProps(state, props) {
  const searchString = state.ui.positionList.searchString.toUpperCase();
  const positions = searchString ? state.entity.positions.filter(
      u => u.name.toUpperCase().indexOf(searchString) >= 0) : state.entity.positions;
  return Object.assign({
    positions,
    searchString: state.ui.positionList.searchString,
  }, props);
}

function mapDispatchToProps(dispatch) {
  return {
    onSearch: (text) => {
      dispatch(uiActions.setSearchString(text));
    },
    onDelete: (id) => {
      dispatch(entityActions.deleteEntity(id));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PositionList);
