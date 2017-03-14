import { genListSelector } from './_selectorGenerator';

export const searchStringSelector = state => state.ui.userList.searchString;

export const listSelector = state => state.entity.users;

export const filteredListSelector = genListSelector(searchStringSelector, listSelector);
