import { createAction } from 'redux-actions';

const DEFAULT_VAL = {
  searchString: '',
  ids: [],
};

export function genConstants(namespace) {
  return {
    SET_SEARCH_STRING: `${namespace}_SET_SEARCH_STRING`,
    SET_IDS: `${namespace}_SET_IDS`,
    REQUEST_LOAD_LIST: `${namespace}_REQUEST_LOAD_LIST`,
    REQUEST_DELETE_ITEM: `${namespace}_REQUEST_DELETE_ITEM`,
  };
}

export function genActions(namespace) {
  const constants = genConstants(namespace);
  return {
    setSearchString: createAction(constants.SET_SEARCH_STRING),
    setIds: createAction(constants.SET_IDS),
    requestLoadList: createAction(constants.REQUEST_LOAD_LIST),
    requestDeleteItem: createAction(constants.REQUEST_DELETE_ITEM),
  };
}

export function genReducer(namespace, DEFAULT = DEFAULT_VAL) {
  const constants = genConstants(namespace);
  return function listReducer(state = DEFAULT, action) {
    switch (action.type) {
      case constants.SET_SEARCH_STRING:
        return { ...state, searchString: action.payload };
      case constants.SET_IDS:
        return { ...state, ids: action.payload };
      default:
        return state;
    }
  };
}
