import { connect } from 'react-redux';
import PositionList from './positions/PositionList';
import { actions as uiActions } from '../redux/ui/positionList';
import { actions as entityActions } from '../redux/entity/positions';
import { filteredListSelector } from '../redux/selectors/positionsSelectors';

function mapStateToProps(state, props) {
  const positions = filteredListSelector(state);
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
