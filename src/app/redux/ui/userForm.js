import { combineReducers } from 'redux';
import { createAction } from 'redux-actions';
import { genConstants, genActions, genReducer } from './_formGenerators';
import {
  genConstants as genAjaxConstants,
  genReducer as genAjaxReducer,
  genActions as genAjaxActions,
} from './_ajaxGenerators';


const USER_FORM_DEFAULT = {
  name: '',
  birthDate: '',
  userPic: '',
  managerId: '',
  positionId: '',
};

const namespace = 'USER_FORM';

export const constants = {
  LOAD_DEPENDENCIES: `${namespace}_LOAD_DEPENDENCIES`,
  ...genConstants(namespace),
  ...genAjaxConstants(namespace),
};

export const reducer = combineReducers({
  meta: genAjaxReducer(namespace),
  data: genReducer(namespace, USER_FORM_DEFAULT),
});

export const actions = {
  loadDependencies: createAction(constants.LOAD_DEPENDENCIES),
  ...genActions(namespace),
  ...genAjaxActions(namespace),
};
