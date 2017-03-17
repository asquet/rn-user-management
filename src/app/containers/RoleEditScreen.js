import { connect } from 'react-redux';
import RolesForm from '../components/roles/RolesForm';
import withActionOnMount from '../hoc/withActionOnMount';
import { actions as entityActions } from '../redux/entity/roles';
import { actions as uiActions } from '../redux/ui/rolesForm';
import { listSelector } from '../redux/selectors/rolesSelectors';

function mapStateToProps(state, { roleId }) {
  const initRole = listSelector(state).find(u => u.id === roleId);
  const role = state.ui.rolesForm;

  return { initData: initRole, role, isNew: false };
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
  withActionOnMount(RolesForm, function init() {
    this.props.init(this.props.initData);
  }));
