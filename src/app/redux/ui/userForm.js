import * as consts from './userForm.consts';

const USER_FORM_DEFAULT = {
  name: '',
  birthDate: '',
  userPic: '',
  managerId: null,
  positionId: null,
};

export default function userList(state = USER_FORM_DEFAULT, action) {
  switch (action.type) {
    case consts.USER_FORM_ON_CHANGE:
      return Object.assign({}, state, { [action.payload.name]: action.payload.value });
    case (consts.USER_FORM_ON_INIT):
      return Object.assign({}, action.payload);
    case consts.USER_FORM_ON_CLEAR:
      return USER_FORM_DEFAULT;
    default:
      return state;
  }
}
