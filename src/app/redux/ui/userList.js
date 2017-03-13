import { genReducer, genActions } from './_listGenerators';

const namespace = 'USER';

export const reducer = genReducer(namespace);

export const actions = genActions(namespace);
