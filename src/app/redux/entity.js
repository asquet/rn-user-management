import { combineReducers } from 'redux';
import { reducer as users } from './entity/users';
import { reducer as positions } from './entity/positions';
import { reducer as roles } from './entity/roles';

export default combineReducers({
  users,
  positions,
  roles,
});
