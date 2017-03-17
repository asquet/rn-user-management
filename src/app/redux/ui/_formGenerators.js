import { createAction } from 'redux-actions';

export function genConstants(namespace) {
  return {
    ON_CHANGE: `${namespace}_ON_CHANGE`,
    ON_CLEAR: `${namespace}_ON_CLEAR`,
    ON_INIT: `${namespace}_ON_INIT`,
    REQUEST_CREATE: `${namespace}_REQUEST_CREATE_ENTITY`,
    REQUEST_UPDATE: `${namespace}_REQUEST_UPDATE_ENTITY`,
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
    onClear: createAction(constants.ON_CLEAR),
    onInit: createAction(constants.ON_INIT),
    requestCreate: createAction(constants.REQUEST_CREATE),
    requestUpdate: createAction(constants.REQUEST_UPDATE),
  };
}

export function genReducer(namespace, DEFAULT) {
  const constants = genConstants(namespace);
  return function formReducer(state = DEFAULT, action) {
    switch (action.type) {
      case constants.ON_CHANGE:
        return { ...state, [action.payload.name]: action.payload.value };
      case (constants.ON_INIT):
        return { ...action.payload };
      case constants.ON_CLEAR:
        return DEFAULT;
      default:
        return state;
    }
  };
}
