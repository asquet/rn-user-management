import { combineReducers } from 'redux';
import users from './entity/users';
import positions from './entity/positions';

export default combineReducers({
  users,
  positions,
});
