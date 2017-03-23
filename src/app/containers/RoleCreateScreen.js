import { connect } from 'react-redux';
import RolesForm from '../components/roles/RolesForm';
import { actions as entityActions } from '../redux/entity/roles';
import { actions as uiActions } from '../redux/ui/rolesForm';
import rolesSelectors from '../redux/selectors/rolesSelectors';

function mapStateToProps(state) {
  const role = rolesSelectors.formDataSelector(state);

  return { role, isNew: true };
}

function mapDispatchToProps(dispatch, props) {
  return {
    onChange: (name, val) => dispatch(uiActions.onChange(name, val)),
    onSave: (data) => {
      dispatch(entityActions.requestCreate(data));
      dispatch(uiActions.onClear());
      props.goToList();
    },
    onCancel: () => {
      dispatch(uiActions.onClear());
      props.goToList();
    },
    goToList() {
      props.navigation.navigate('List');
    },
  };
}

export default connect(mapStateToProps,
  mapDispatchToProps)(RolesForm);
