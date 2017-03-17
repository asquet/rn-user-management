import { takeLatest, put } from 'redux-saga/effects';

import EntityApi from '../../api/EntityApi';
import genEntitySagas from './_entitySagas';
import { genListSagas, genFormSagas } from './_genSaga';
import { actions as listActions, constants as listConstants } from '../ui/userList';
import { actions as formActions, constants as formConstants } from '../ui/userForm';
import { actions as entityActions, constants as entityConstants } from '../entity/users';
import { actions as positionsEntityActions } from '../entity/positions';


const api = new EntityApi('users');
const entitySagas = genEntitySagas(api, entityActions, entityConstants);

const listSagas = genListSagas(entitySagas, listActions, listConstants);
const formSagas = genFormSagas(entitySagas, formActions, formConstants);

function* loadDependencies() {
  yield put(positionsEntityActions.requestLoadData());
  yield put(entityActions.requestLoadData());
}


export default [
  ...listSagas,
  ...formSagas,
  ...entitySagas.getEntityEventsWatchers(),
  takeLatest(formConstants.LOAD_DEPENDENCIES, loadDependencies),
];
