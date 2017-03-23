import { connect } from 'react-redux';
import UserForm from '../components/user/UserForm';
import withActionOnMount from '../hoc/withActionOnMount';
import { actions as uiActions } from '../redux/ui/userForm';
import userSelectors from '../redux/selectors/userSelectors';
import positionSelectors from '../redux/selectors/positionsSelectors';

function mapStateToProps(state, { navigation }) {
  const initUser = userSelectors.entityHashSelector(state)[navigation.state.params.userId];
  const user = userSelectors.formDataSelector(state);
  const managers = userSelectors.allDataSelector(state);
  const positions = positionSelectors.allDataSelector(state);

  return { initData: initUser, user, managers, positions, isNew: false };
}

function mapDispatchToProps(dispatch, props) {
  const goToList = () => {
    props.navigation.navigate('List');
  };
  return {
    onChange: (name, val) => dispatch(uiActions.onChange(name, val)),
    init: (data) => {
      dispatch(uiActions.onInit(data));
      dispatch(uiActions.loadDependencies());
    },
    onSave: (data) => {
      dispatch(uiActions.requestUpdate(data));
      dispatch(uiActions.onClear());
      goToList();
    },
    onCancel: () => {
      dispatch(uiActions.onClear());
      goToList();
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withActionOnMount(UserForm, function init() {
    this.props.init(this.props.initData);
  }));
