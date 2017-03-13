import { connect } from 'react-redux';
import RolesForm from './roles/RolesForm';
import { actions as entityActions } from '../redux/entity/roles';
import { actions as uiActions } from '../redux/ui/rolesForm';

function mapStateToProps(state) {
  const role = state.ui.rolesForm;

  return { role, isNew: true };
}

function mapDispatchToProps(dispatch, props) {
  return {
    onChange: (name, val) => dispatch(uiActions.onChange(name, val)),
    onSave: (data) => {
      dispatch(entityActions.createEntity(data));
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
  mapDispatchToProps)(RolesForm);
