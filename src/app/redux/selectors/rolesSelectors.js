import { genListPack } from './_selectorGenerator';

export const listDescSelector = state => state.ui.rolesList;

export const entityHashSelector = state => state.entity.roles;

export default genListPack({ listDescSelector, entityHashSelector });
