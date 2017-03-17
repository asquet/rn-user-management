import { combineReducers } from 'redux';
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
  ...genConstants(namespace),
  ...genAjaxConstants(namespace),
};

export const reducer = combineReducers({
  meta: genAjaxReducer(namespace),
  data: genReducer(namespace, USER_FORM_DEFAULT),
});

export const actions = {
  ...genActions(namespace),
  ...genAjaxActions(namespace),
};
