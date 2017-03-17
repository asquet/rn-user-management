import { put, takeLatest } from 'redux-saga/effects';

export default function genEntitySagas(api, entityActions, entityConstants) {
  function* loadData() {
    try {
      const resp = yield api.getAll();
      const data = yield resp.json();

      yield put(entityActions.loadData(data));

      return { data };
    } catch (error) {
      return { error };
    }
  }

  function* createEntity(action) {
    try {
      const resp = yield api.create(action.payload);
      const data = yield resp.json();

      yield put(entityActions.loadData([data]));

      return { data };
    } catch (error) {
      return { error };
    }
  }

  function* updateEntity(action) {
    try {
      const resp = yield api.update(action.payload);
      const data = yield resp.json();

      yield put(entityActions.loadData([data]));

      return { data };
    } catch (error) {
      return { error };
    }
  }

  function* deleteEntity(action) {
    try {
      const resp = yield api.remove(action.payload);
      yield resp.json();

      yield put(entityActions.deleteEntity(action.payload));

      return { ok: true };
    } catch (error) {
      return { error };
    }
  }

  function* watchEntityEvents() {
    yield [
      takeLatest(entityConstants.REQUEST_LOAD_DATA, loadData),
      takeLatest(entityConstants.REQUEST_DELETE, deleteEntity),
      takeLatest(entityConstants.REQUEST_UPDATE, updateEntity),
      takeLatest(entityConstants.REQUEST_CREATE, createEntity),
    ];
  }

  return {
    watchEntityEvents,
    loadData,
    deleteEntity,
    updateEntity,
    createEntity,
  };
}
