import { connect } from 'react-redux';
import PositionList from '../components/positions/PositionList';
import { actions as uiActions } from '../redux/ui/positionList';
import selectors from '../redux/selectors/positionsSelectors';
import withActionOnMount from '../hoc/withActionOnMount';

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
    loadData() {
      dispatch(uiActions.requestLoadList());
    },
  };
}
const cmp = withActionOnMount(PositionList, function init() {
  this.props.loadData();
});
export default connect(mapStateToProps, mapDispatchToProps)(cmp);
