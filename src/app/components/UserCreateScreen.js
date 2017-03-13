import { connect } from 'react-redux';
import UserForm from './user/UserForm';
import { actions as entityActions } from '../redux/entity/users';
import { actions as uiActions } from '../redux/ui/userForm';

function mapStateToProps(state) {
  const user = state.ui.userForm;
  const managers = state.entity.users;
  const positions = state.entity.positions;

  return { user, managers, positions, isNew: true };
}

function mapDispatchToProps(dispatch, { goToList }) {
  return {
    onChange: (name, val) => dispatch(uiActions.onChange(name, val)),
    onSave: (data) => {
      dispatch(entityActions.createEntity(data));
      dispatch(uiActions.onClear());
      goToList();
    },
    onCancel: () => {
      dispatch(uiActions.onClear());
      goToList();
    },
  };
}

export default connect(mapStateToProps,
  mapDispatchToProps)(UserForm);
