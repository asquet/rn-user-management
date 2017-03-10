import * as consts from './userList.consts';

const USER_LIST_DEFAULT = {
  searchString: '',
};

export default function userList(state = USER_LIST_DEFAULT, action) {
  switch (action.type) {
    case consts.SET_SEARCH_STRING:
      return Object.assign({}, state, { searchString: action.payload });
    default:
      return state;
  }
}
