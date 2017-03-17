import { fork } from 'redux-saga/effects';

import userSagas from './userSagas';
import positionSagas from './positionSagas';
import rolesSagas from './rolesSagas';


export default function* rootSaga() {
  yield [...positionSagas, ...userSagas, ...rolesSagas];
}
