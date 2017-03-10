import { connect } from 'react-redux';
import UserForm from './user/UserForm';
import withActionOnMount from '../hoc/withActionOnMount';
import * as entityActions from '../redux/entity/users.action';
import * as uiActions from '../redux/ui/userForm.actions';

function mapStateToProps(state, { userId }) {
  const initUser = state.entity.users.find(u => u.id === userId);
  const user = state.ui.userForm;
  const managers = state.entity.users;
  const positions = state.entity.positions;

  return { initData: initUser, user, managers, positions, isNew: false };
}

function mapDispatchToProps(dispatch, props) {
  return {
    onChange: (name, val) => dispatch(uiActions.onChange(name, val)),
    init: data => dispatch(uiActions.onInit(data)),
    onSave: (data) => {
      dispatch(entityActions.updateEntity(data));
      dispatch(uiActions.onClear());
      props.goToList();
    },
    onCancel: () => {
      dispatch(uiActions.onClear());
      props.goToList();
    },
  };
}

export default connect(mapStateToProps,
  mapDispatchToProps)(
  withActionOnMount(UserForm, function init() {
    this.props.init(this.props.initData);
  }));
