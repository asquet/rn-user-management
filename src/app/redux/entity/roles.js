import { genActions, genReducer, genConstants } from './_entityGenerators';

const namespace = 'ROLES';

export const constants = genConstants(namespace);

export const reducer = genReducer(namespace);

export const actions = genActions(namespace);
