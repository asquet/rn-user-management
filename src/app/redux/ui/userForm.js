import { genActions, genReducer } from './_formGenerators';

const USER_FORM_DEFAULT = {
  name: '',
  birthDate: '',
  userPic: '',
  managerId: '',
  positionId: '',
};

const namespace = 'USER';

export const reducer = genReducer(namespace, USER_FORM_DEFAULT);

export const actions = genActions(namespace);
