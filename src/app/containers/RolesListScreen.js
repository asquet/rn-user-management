import { connect } from 'react-redux';
import RolesList from '../components/roles/RolesList';
import { actions as uiActions } from '../redux/ui/rolesList';
import selectors from '../redux/selectors/rolesSelectors';
import withActionOnMount from '../hoc/withActionOnMount';

function mapStateToProps(state, props) {
  const roles = selectors.filteredListSelector(state);
  return Object.assign({
    roles,
    searchString: selectors.listSearchStringSelector(state),
  }, props);
}

function mapDispatchToProps(dispatch) {
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
  };
}

const cmp = withActionOnMount(RolesList, function init() {
  this.props.loadData();
});

export default connect(mapStateToProps, mapDispatchToProps)(cmp);
