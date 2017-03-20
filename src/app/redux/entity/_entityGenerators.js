import { createAction } from 'redux-actions';

export function genConstants(namespace) {
  return {
    REQUEST_LOAD_DATA: `${namespace}_REQUEST_LOAD_DATA`,
    REQUEST_CREATE: `${namespace}_REQUEST_CREATE_ENTITY`,
    REQUEST_UPDATE: `${namespace}_REQUEST_UPDATE_ENTITY`,
    REQUEST_DELETE: `${namespace}_REQUEST_DELETE_ENTITY`,
    CREATE_SUCCESS: `${namespace}_CREATE_SUCCESS_ENTITY`,
    UPDATE_SUCCESS: `${namespace}_CREATE_SUCCESS_ENTITY`,
    LOAD_DATA: `${namespace}_LOAD_DATA`,
    CLEAR_DATA: `${namespace}_CLEAR_DATA`,
    DELETE: `${namespace}_DELETE_ENTITY`,
  };
}

export function genActions(namespace) {
  const constants = genConstants(namespace);
  return {
    requestLoadData: createAction(constants.REQUEST_LOAD_DATA),
    requestCreate: createAction(constants.REQUEST_CREATE),
    requestUpdate: createAction(constants.REQUEST_UPDATE),
    createSuccess: createAction(constants.CREATE_SUCCESS),
    updateSuccess: createAction(constants.UPDATE_SUCCESS),
    loadData: createAction(constants.LOAD_DATA),
    clearData: createAction(constants.CLEAR_DATA),
    deleteEntity: createAction(constants.DELETE),
    requestDelete: createAction(constants.REQUEST_DELETE),
  };
}

// data: {id1: {k:v, k:v}, id2: {...}, ... }
export function genReducer(namespace, DEFAULT = {}) {
  const constants = genConstants(namespace);
  let res;
  return function entityReducer(state = DEFAULT, action) {
    switch (action.type) {
      case constants.DELETE:
        res = Object.assign({}, state);
        delete res[action.payload];
        return res;
      case constants.LOAD_DATA:
        return action.payload.reduce((obj, item) => ({
          ...obj,
          [item.id]: item,
        }), Object.assign({}, state));

      case constants.CLEAR_DATA:
        return DEFAULT;

      default:
        return state;
    }
  };
}
