import { genActions, genReducer } from './_entityGenerators';


const ROLES_DEFAULT = [{
  id: 1,
  name: 'role1',
}, {
  id: 2,
  name: 'role2',
}];

const namespace = 'ROLES';

export const reducer = genReducer(namespace, [...ROLES_DEFAULT]);

export const actions = genActions(namespace);
