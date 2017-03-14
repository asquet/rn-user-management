import { connect } from 'react-redux';
import UserList from './user/UserList';
import { actions as uiActions } from '../redux/ui/userList';
import { actions as entityActions } from '../redux/entity/users';
import { filteredListSelector } from '../redux/selectors/userSelectors';

function mapStateToProps(state, props) {
  const users = filteredListSelector(state);
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
