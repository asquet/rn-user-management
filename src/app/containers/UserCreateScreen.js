import { connect } from 'react-redux';
import UserForm from '../components/user/UserForm';
import { actions as uiActions } from '../redux/ui/userForm';
import userSelectors from '../redux/selectors/userSelectors';
import positionSelectors from '../redux/selectors/positionsSelectors';

function mapStateToProps(state) {
  const user = userSelectors.formDataSelector(state);
  const managers = userSelectors.allDataSelector(state);
  const positions = positionSelectors.allDataSelector(state);

  return { user, managers, positions, isNew: true };
}

function mapDispatchToProps(dispatch, { goToList }) {
  return {
    onChange: (name, val) => dispatch(uiActions.onChange(name, val)),
    onSave: (data) => {
      dispatch(uiActions.requestCreate(data));
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
