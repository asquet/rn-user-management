import { genActions, genReducer } from './_formGenerators';

const POSITION_FORM_DEFAULT = {
  name: '',
  roles: [],
};

const namespace = 'POSITION';

export const reducer = genReducer(namespace, POSITION_FORM_DEFAULT);

export const actions = genActions(namespace);
