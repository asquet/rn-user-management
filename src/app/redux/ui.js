import { combineReducers } from 'redux';

import userList from './ui/userList';
import userForm from './ui/userForm';

export default combineReducers({
  userList,
  userForm,
});
