export function genConstants(namespace) {
  return {
    ON_CHANGE: `${namespace}_FORM_ON_CHANGE`,
    ON_CLEAR: `${namespace}_FORM_ON_CLEAR`,
    ON_INIT: `${namespace}_FORM_ON_INIT`,
  };
}

export function genActions(namespace) {
  const constants = genConstants(namespace);
  return {
    onChange(name, value) {
      return {
        type: constants.ON_CHANGE,
        payload: {
          name,
          value,
        },
      };
    },
    onClear() {
      return {
        type: constants.ON_CLEAR,
      };
    },
    onInit(payload) {
      return {
        type: constants.ON_INIT,
        payload,
      };
    },
  };
}

export function genReducer(namespace, DEFAULT) {
  const constants = genConstants(namespace);
  return function formReducer(state = DEFAULT, action) {
    switch (action.type) {
      case constants.ON_CHANGE:
        return Object.assign({}, state, { [action.payload.name]: action.payload.value });
      case (constants.ON_INIT):
        return Object.assign({}, action.payload);
      case constants.ON_CLEAR:
        return DEFAULT;
      default:
        return state;
    }
  }
}