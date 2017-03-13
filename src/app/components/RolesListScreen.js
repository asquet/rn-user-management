import { connect } from 'react-redux';
import RolesList from './roles/RolesList';
import { actions as uiActions } from '../redux/ui/rolesList';
import { actions as entityActions } from '../redux/entity/roles';

function mapStateToProps(state, props) {
  const searchString = state.ui.rolesList.searchString.toUpperCase();
  const roles = searchString ? state.entity.roles.filter(
      u => u.name.toUpperCase().indexOf(searchString) >= 0) : state.entity.roles;
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
