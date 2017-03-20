import { combineReducers } from 'redux';
import { createAction } from 'redux-actions';
import { genActions, genReducer, genConstants } from './_formGenerators';
import {
  genConstants as genAjaxConstants,
  genReducer as genAjaxReducer,
  genActions as genAjaxActions,
} from './_ajaxGenerators';


const POSITION_FORM_DEFAULT = {
  name: '',
  roles: [],
};

const namespace = 'POSITION_FORM';

export const constants = {
  LOAD_DEPENDENCIES: `${namespace}_LOAD_DEPENDENCIES`,
  ...genConstants(namespace),
  ...genAjaxConstants(namespace),
};

export const reducer = combineReducers({
  meta: genAjaxReducer(namespace),
  data: genReducer(namespace, POSITION_FORM_DEFAULT),
});

export const actions = {
  loadDependencies: createAction(constants.LOAD_DEPENDENCIES),
  ...genActions(namespace),
  ...genAjaxActions(namespace),
};
