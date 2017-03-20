import { combineReducers } from 'redux';
import { genActions, genReducer, genConstants } from './_formGenerators';
import {
  genConstants as genAjaxConstants,
  genReducer as genAjaxReducer,
  genActions as genAjaxActions,
} from './_ajaxGenerators';

const ROLES_FORM_DEFAULT = {
  name: '',
};

const namespace = 'ROLE_FORM';

export const constants = {
  ...genConstants(namespace),
  ...genAjaxConstants(namespace),
};

export const reducer = combineReducers({
  meta: genAjaxReducer(namespace),
  data: genReducer(namespace, ROLES_FORM_DEFAULT),
});

export const actions = {
  ...genActions(namespace),
  ...genAjaxActions(namespace),
};
