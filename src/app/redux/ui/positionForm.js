import { genActions, genReducer, genConstants } from './_formGenerators';

const POSITION_FORM_DEFAULT = {
  name: '',
  roles: [],
};

const namespace = 'POSITION_FORM';

export const constants = genConstants(namespace);

export const reducer = genReducer(namespace, POSITION_FORM_DEFAULT);

export const actions = genActions(namespace);
