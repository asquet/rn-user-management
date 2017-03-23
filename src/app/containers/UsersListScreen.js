import { connect } from 'react-redux';
import UserList from '../components/user/UserList';
import { actions as uiActions } from '../redux/ui/userList';
import selectors from '../redux/selectors/userSelectors';
import withActionOnMount from '../hoc/withActionOnMount';

function mapStateToProps(state, props) {
  const users = selectors.filteredListSelector(state);
  return {
    users,
    searchString: selectors.listSearchStringSelector(state),
    ...props,
  };
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
    goToEdit(userId) {
      props.navigation.navigate('Edit', { userId });
    },
    goToCreate() {
      props.navigation.navigate('Create');
    },
  };
}

const cmp = withActionOnMount(UserList, function init() {
  this.props.loadData();
});

export default connect(mapStateToProps, mapDispatchToProps)(cmp);
