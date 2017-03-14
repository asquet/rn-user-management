import { genListSelector } from './_selectorGenerator';

export const searchStringSelector = state => state.ui.positionList.searchString;

export const listSelector = state => state.entity.positions;

export const filteredListSelector = genListSelector(searchStringSelector, listSelector);
