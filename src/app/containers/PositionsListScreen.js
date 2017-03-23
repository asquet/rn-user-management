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

function mapDispatchToProps(dispatch, props) {
  return {
    onSearch: (text) => {
      dispatch(uiActions.setSearchString(text));
    },
    onDelete: (id) => {
      dispatch(uiActions.requestDeleteItem(id));
    },
    loadData() {
      dispatch(uiActions.requestLoadList());
    },
    goToEdit(user) {
      props.navigation.navigate('Edit', { user });
    },
    goToCreate() {
      props.navigation.navigate('Create');
    },
  };
}
const cmp = withActionOnMount(PositionList, function init() {
  this.props.loadData();
});
export default connect(mapStateToProps, mapDispatchToProps)(cmp);
