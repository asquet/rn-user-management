import { genActions, genReducer, genConstants } from './_formGenerators';

const ROLES_FORM_DEFAULT = {
  name: '',
};

const namespace = 'ROLE_FORM';

export const constants = genConstants(namespace);

export const reducer = genReducer(namespace, ROLES_FORM_DEFAULT);

export const actions = genActions(namespace);
