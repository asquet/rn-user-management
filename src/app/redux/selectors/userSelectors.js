import { genListPack, genFormPack } from './_selectorGenerator';

const listDescSelector = state => state.ui.userList;

const entityHashSelector = state => state.entity.users;

const formDescSelector = state => state.ui.userForm;

export default {
  ...genListPack({ listDescSelector, entityHashSelector }),
  ...genFormPack({ formDescSelector }),
  entityHashSelector,
};
