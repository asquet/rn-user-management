import { connect } from 'react-redux';
import RolesList from '../components/roles/RolesList';
import { actions as uiActions } from '../redux/ui/rolesList';
import selectors from '../redux/selectors/rolesSelectors';

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
      dispatch(uiActions.requestDelete(id));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(RolesList);
