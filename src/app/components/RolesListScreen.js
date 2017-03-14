import { connect } from 'react-redux';
import RolesList from './roles/RolesList';
import { actions as uiActions } from '../redux/ui/rolesList';
import { actions as entityActions } from '../redux/entity/roles';
import { filteredListSelector } from '../redux/selectors/rolesSelectors';

function mapStateToProps(state, props) {
  const roles = filteredListSelector(state);
  return Object.assign({
    roles,
    searchString: state.ui.rolesList.searchString,
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
export default connect(mapStateToProps, mapDispatchToProps)(RolesList);
