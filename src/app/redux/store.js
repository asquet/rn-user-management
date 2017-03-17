import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import createSagaMiddleware from 'redux-saga';
import entity from './entity';
import ui from './ui';
import rootSaga from './sagas/_rootSaga';


const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  entity,
  ui,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

export default store;
