import { put, takeLatest } from 'redux-saga/effects';

export function genListSagas(entitySagas, actions, constants) {
  function* getListDataSaga() {
    yield put(actions.requestDataStart());

    const result = yield* entitySagas.loadData();

    if (result.data) {
      yield put(actions.setIds(result.data.map(i => i.id)));

      yield put(actions.requestDataSuccess());
    } else {
      yield put(actions.requestDataFail(result.error));
    }
  }

  function* deleteEntitySaga(action) {
    yield put(actions.requestDataStart());

    const result = yield* entitySagas.deleteEntity(action);
    if (result.ok) {
      yield put(actions.requestDataSuccess());
    } else {
      yield put(actions.requestDataFail(result.error));
    }
  }

  return [
    takeLatest(constants.REQUEST_LOAD_LIST, getListDataSaga),
    takeLatest(constants.REQUEST_DELETE_ITEM, deleteEntitySaga),
  ];
}

export function genFormSagas(entitySagas, actions, constants) {
  function* createEntitySaga(action) {
    yield put(actions.requestDataStart());
    const result = yield* entitySagas.createEntity(action);

    if (result.data) {
      yield put(actions.requestDataSuccess());
    } else {
      yield put(actions.requestDataFail(result.error));
    }
  }

  function* updateEntitySaga(action) {
    yield put(actions.requestDataStart());

    const result = yield* entitySagas.updateEntity(action);

    if (result.data) {
      yield put(actions.requestDataSuccess());
    } else {
      yield put(actions.requestDataFail(result.error));
    }
  }

  return [
    takeLatest(constants.REQUEST_CREATE, createEntitySaga),
    takeLatest(constants.REQUEST_UPDATE, updateEntitySaga),
  ];
}
