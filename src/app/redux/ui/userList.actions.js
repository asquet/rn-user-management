import * as consts from './userList.consts';

export function setSearchString(payload) {
  return {
    type: consts.SET_SEARCH_STRING,
    payload,
  };
}
