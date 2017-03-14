import { createSelector } from 'reselect';

export function genListSelector(searchStringSelector, entityListSelector) {
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
