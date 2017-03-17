import { connect } from 'react-redux';
import PositionList from '../components/positions/PositionList';
import { actions as uiActions } from '../redux/ui/positionList';
import selectors from '../redux/selectors/positionsSelectors';

function mapStateToProps(state, props) {
  const positions = selectors.filteredListSelector(state);
  return Object.assign({
    positions,
    searchString: selectors.listSearchStringSelector(state),
  }, props);
}

function mapDispatchToProps(dispatch) {
  return {
    onSearch: (text) => {
      dispatch(uiActions.setSearchString(text));
    },
    onDelete: (id) => {
      dispatch(uiActions.requestDelete(id));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PositionList);
