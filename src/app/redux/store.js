import { createStore, combineReducers } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import entity from './entity';
import ui from './ui';

const store = createStore(combineReducers({
  entity,
  ui,
}), devToolsEnhancer());

export default store;
