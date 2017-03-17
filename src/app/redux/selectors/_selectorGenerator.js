import { createSelector } from 'reselect';

export function genSearchStringSelector(listDescSelector) {
  return createSelector(
    [listDescSelector],
    list => list.data.searchString,
  );
}

export function genListIdsSelector(listDescriptor) {
  return createSelector(
    [listDescriptor],
    list => list.data.ids,
  );
}

export function genListDataSelector(entityHashSelector, idsListSelector) {
  return createSelector(
    [entityHashSelector, idsListSelector],
    (entityHash, idsList) => idsList.map(id => entityHash[id]).filter(i => i),
  );
}

export function genFilteredListSelector(searchStringSelector, entityListSelector) {
  return createSelector(
    [searchStringSelector, entityListSelector],
    (searchString, userList) => {
      if (!searchString) {
        return userList;
      }
      const term = searchString.toUpperCase();
      return userList.filter(i => i.name.toUpperCase().indexOf(term) >= 0);
    },
  );
}

export function genAllDataSelector(entityHashSelector) {
  return createSelector([entityHashSelector], entityHash => Object.values(entityHash));
}

export const genListPack = ({ listDescSelector, entityHashSelector }) => {
  const allDataSelector = genAllDataSelector(entityHashSelector);
  const listIdsSelector = genListIdsSelector(listDescSelector);
  const listSearchStringSelector = genSearchStringSelector(listDescSelector);
  const listDataSelector = genListDataSelector(entityHashSelector, listIdsSelector);
  const filteredListSelector = genFilteredListSelector(listSearchStringSelector, listDataSelector);
  return {
    allDataSelector,
    listIdsSelector,
    listSearchStringSelector,
    listDataSelector,
    filteredListSelector,
  };
};

export const genFormPack = ({ formDescSelector }) => {
  const formDataSelector = createSelector([formDescSelector], formDesc => formDesc.data);
  return {
    formDataSelector,
  };
};
