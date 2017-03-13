const DEFAULT_VAL = {
  searchString: '',
};

export function genConstants(namespace) {
  return {
    SET_SEARCH_STRING: `${namespace}_LIST_SET_SEARCH_STRING`,
  };
}

export function genActions(namespace) {
  const constants = genConstants(namespace);
  return {
    setSearchString(payload) {
      return {
        type: constants.SET_SEARCH_STRING,
        payload,
      };
    },
  };
}

export function genReducer(namespace, DEFAULT = DEFAULT_VAL) {
  const constants = genConstants(namespace);
  return function listReducer(state = DEFAULT, action) {
    switch (action.type) {
      case constants.SET_SEARCH_STRING:
        return Object.assign({}, state, { searchString: action.payload });
      default:
        return state;
    }
  }
}
