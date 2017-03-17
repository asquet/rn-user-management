import { connect } from 'react-redux';
import PositionForm from '../components/positions/PositionForm';
import { actions as entityActions } from '../redux/entity/positions';
import { actions as uiActions } from '../redux/ui/positionForm';

function mapStateToProps(state) {
  const position = state.ui.positionForm;
  const roles = state.entity.roles;

  return { position, roles, isNew: true };
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
  mapDispatchToProps)(PositionForm);
