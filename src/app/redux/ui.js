import { combineReducers } from 'redux';
import { reducer as userList } from './ui/userList';
import { reducer as userForm } from './ui/userForm';

import { reducer as positionList } from './ui/positionList';
import { reducer as positionForm } from './ui/positionForm';

import { reducer as rolesList } from './ui/rolesList';
import { reducer as rolesForm } from './ui/rolesForm';

export default combineReducers({
  userList,
  userForm,
  positionList,
  positionForm,
  rolesList,
  rolesForm,
});
