import { combineReducers } from 'redux';
import { reducer as userList } from './ui/userList';
import { reducer as userForm } from './ui/userForm';

import { reducer as positionList } from './ui/positionList';

export default combineReducers({
  userList,
  userForm,
  positionList,
});
