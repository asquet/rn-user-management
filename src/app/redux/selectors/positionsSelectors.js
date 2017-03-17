import { genListPack } from './_selectorGenerator';

const listDescSelector = state => state.ui.positionList;

const entityHashSelector = state => state.entity.positions;

export default genListPack({ listDescSelector, entityHashSelector });
