import * as consts from './users.consts';

export function createEntity(payload) {
  return {
    type: consts.CREATE_ENTITY,
    payload,
  };
}

export function deleteEntity(payload) {
  return {
    type: consts.DELETE_ENTITY,
    payload,
  };
}

export function updateEntity(payload) {
  return {
    type: consts.UPDATE_ENTITY,
    payload,
  };
}
