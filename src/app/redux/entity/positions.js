import { genActions, genReducer } from './_entityGenerators';


const DEFAULT_POSITIONS = [{ id: 1, name: 'Pos1' }, { id: 2, name: 'Pos2' }];

const namespace = 'POSITION';

export const reducer = genReducer(namespace, DEFAULT_POSITIONS);

export const actions = genActions(namespace);
