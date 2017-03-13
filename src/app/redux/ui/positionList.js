import { genReducer, genActions } from './_listGenerators';

const namespace = 'POSITIONS';

export const reducer = genReducer(namespace);

export const actions = genActions(namespace);
