import { combineReducers } from 'redux';
import { genConstants, genReducer, genActions } from './_listGenerators';
import {
  genConstants as genAjaxConstants,
  genReducer as genAjaxReducer,
  genActions as genAjaxActions,
} from './_ajaxGenerators';

const namespace = 'POSITIONS_LIST';

export const constants = {
  ...genConstants(namespace),
  ...genAjaxConstants(namespace),
};

export const reducer = combineReducers({
  meta: genAjaxReducer(namespace),
  data: genReducer(namespace),
});

export const actions = {
  ...genActions(namespace),
  ...genAjaxActions(namespace),
};
