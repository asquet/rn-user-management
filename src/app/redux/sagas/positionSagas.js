import { put, takeLatest } from 'redux-saga/effects';
import EntityApi from '../../api/EntityApi';
import genEntitySagas from './_entitySagas';
import { genListSagas, genFormSagas } from './_genSaga';
import { actions as listActions, constants as listConstants } from '../ui/positionList';
import { actions as formActions, constants as formConstants } from '../ui/positionForm';
import { actions as entityActions, constants as entityConstants } from '../entity/positions';
import { actions as rolesEntityActions } from '../entity/roles';


const api = new EntityApi('positions');
const entitySagas = genEntitySagas(api, entityActions, entityConstants);

const listSagas = genListSagas(entitySagas, entityConstants, listActions, listConstants);
const formSagas = genFormSagas(entitySagas, formActions, formConstants);


function* loadDependencies() {
  yield put(rolesEntityActions.requestLoadData());
}

export default [
  ...listSagas,
  ...formSagas,
  ...entitySagas.getEntityEventsWatchers(),
  takeLatest(formConstants.LOAD_DEPENDENCIES, loadDependencies),
];
