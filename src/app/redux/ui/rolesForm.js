import { genActions, genReducer } from './_formGenerators';

const ROLES_FORM_DEFAULT = {
  name: '',
};

const namespace = 'ROLE';

export const reducer = genReducer(namespace, ROLES_FORM_DEFAULT);

export const actions = genActions(namespace);
