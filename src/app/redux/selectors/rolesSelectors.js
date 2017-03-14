import { genListSelector } from './_selectorGenerator';

export const searchStringSelector = state => state.ui.rolesList.searchString;

export const listSelector = state => state.entity.roles;

export const filteredListSelector = genListSelector(searchStringSelector, listSelector);
