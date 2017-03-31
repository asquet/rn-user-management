import { connect } from 'react-redux';
import PositionForm from '../components/positions/PositionForm';
import { actions as entityActions } from '../redux/entity/positions';
import { actions as uiActions } from '../redux/ui/positionForm';
import positionSelectors from '../redux/selectors/positionsSelectors';
import rolesSelectors from '../redux/selectors/rolesSelectors';
import withActionOnMount from '../hoc/withActionOnMount';

function mapStateToProps(state) {
  const position = positionSelectors.formDataSelector(state);
  const roles = rolesSelectors.allDataSelector(state);

  return { position, roles, isNew: true };
}

function mapDispatchToProps(dispatch, props) {
  const goToList = () => {
    props.navigation.goBack();
  };
  return {
    onChange: (name, val) => dispatch(uiActions.onChange(name, val)),
    init: () => dispatch(uiActions.loadDependencies()),
    onSave: (data) => {
      dispatch(entityActions.requestCreate(data));
      dispatch(uiActions.onClear());
      goToList();
    },
    onCancel: () => {
      dispatch(uiActions.onClear());
      goToList();
    },
    goToList() {
      props.navigation.navigate('List');
    },
  };
}

export default connect(mapStateToProps,
  mapDispatchToProps)(
  withActionOnMount(PositionForm, function init() {
    this.props.init();
  }));
