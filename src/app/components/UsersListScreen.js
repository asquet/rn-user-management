import { connect } from 'react-redux';
import UserList from './user/UserList';
import * as uiActions from '../redux/ui/userList.actions';
import * as entityActions from '../redux/entity/users.action';

function mapStateToProps(state, props) {
  const searchString = state.ui.userList.searchString.toUpperCase();
  const users = searchString ? state.entity.users.filter(
      u => u.name.toUpperCase().indexOf(searchString) >= 0) : state.entity.users;
  return Object.assign({
    users,
    searchString: state.ui.userList.searchString,
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
export default connect(mapStateToProps, mapDispatchToProps)(UserList);
