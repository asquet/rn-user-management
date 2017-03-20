import { genListPack, genFormPack } from './_selectorGenerator';

export const listDescSelector = state => state.ui.rolesList;

export const entityHashSelector = state => state.entity.roles;

const formDescSelector = state => state.ui.rolesForm;

export default {
  ...genListPack({ listDescSelector, entityHashSelector }),
  ...genFormPack({ formDescSelector }),
  entityHashSelector,
};
