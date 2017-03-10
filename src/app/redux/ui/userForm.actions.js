import * as consts from './userForm.consts';

export function onChange(name, value) {
  return {
    type: consts.USER_FORM_ON_CHANGE,
    payload: {
      name,
      value,
    },
  };
}

export function onClear() {
  return {
    type: consts.USER_FORM_ON_CLEAR,
  };
}

export function onInit(payload) {
  return {
    type: consts.USER_FORM_ON_INIT,
    payload,
  };
}
