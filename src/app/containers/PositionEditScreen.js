import { connect } from 'react-redux';
import PositionForm from '../components/positions/PositionForm';
import withActionOnMount from '../hoc/withActionOnMount';
import { actions as entityActions } from '../redux/entity/positions';
import { actions as uiActions } from '../redux/ui/positionForm';
import { listSelector } from '../redux/selectors/positionsSelectors';
import { listSelector as roleListSelector } from '../redux/selectors/rolesSelectors';

function mapStateToProps(state, { positionId }) {
  const initPosition = listSelector(state).find(u => u.id === positionId);
  const position = state.ui.positionForm;
  const roles = roleListSelector(state);

  return { initData: initPosition, position, roles, isNew: false };
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
  withActionOnMount(PositionForm, function init() {
    this.props.init(this.props.initData);
  }));
