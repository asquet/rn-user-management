import { connect } from 'react-redux';
import UserList from '../components/user/UserList';
import { actions as uiActions } from '../redux/ui/userList';
import selectors from '../redux/selectors/userSelectors';
import withActionOnMount from '../hoc/withActionOnMount';

function mapStateToProps(state, props) {
  const users = selectors.filteredListSelector(state);
  return Object.assign({
    users,
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

const cmp = withActionOnMount(UserList, function init() {
  this.props.loadData();
});

export default connect(mapStateToProps, mapDispatchToProps)(cmp);
