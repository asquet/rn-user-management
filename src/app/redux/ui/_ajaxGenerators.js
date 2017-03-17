import { createAction } from 'redux-actions';

const DEFAULT_META = {
  isRequestPending: false,
  error: null,
};

export function genConstants(namespace) {
  return {
    REQUEST_DATA_START: `${namespace}_REQUEST_DATA_START`,
    REQUEST_DATA_SUCCESS: `${namespace}_REQUEST_DATA_SUCCESS`,
    REQUEST_DATA_FAIL: `${namespace}_REQUEST_DATA_FAIL`,
  };
}

export function genActions(namespace) {
  const constants = genConstants(namespace);

  return {
    requestDataSuccess: createAction(constants.REQUEST_DATA_SUCCESS),
    requestDataFail: createAction(constants.REQUEST_DATA_FAIL),
    requestDataStart: createAction(constants.REQUEST_DATA_START),
  };
}

export function genReducer(namespace, DEFAULT = DEFAULT_META) {
  const constants = genConstants(namespace);

  return function ajaxReducer(state = DEFAULT, action) {
    switch (action.type) {
      case constants.REQUEST_DATA_START:
        return { ...state, isRequestPending: true };
      case constants.REQUEST_DATA_FAIL:
        return { ...state, isRequestPending: false, error: action.error };
      case constants.REQUEST_DATA_SUCCESS:
        return { ...state, isRequestPending: false, error: null };
      default:
        return state;
    }
  };
}
