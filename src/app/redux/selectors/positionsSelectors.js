import { genListPack, genFormPack } from './_selectorGenerator';

const listDescSelector = state => state.ui.positionList;

const entityHashSelector = state => state.entity.positions;

const formDescSelector = state => state.ui.positionForm;

export default {
  ...genListPack({ listDescSelector, entityHashSelector }),
  ...genFormPack({ formDescSelector }),
  entityHashSelector,
};
