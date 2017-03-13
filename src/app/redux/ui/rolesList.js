import { genReducer, genActions } from './_listGenerators';

const namespace = 'ROLES';

export const reducer = genReducer(namespace);

export const actions = genActions(namespace);
