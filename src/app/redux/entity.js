import { combineReducers } from 'redux';
import { reducer as users } from './entity/users';
import { reducer as positions } from './entity/positions';

export default combineReducers({
  users,
  positions,
});
