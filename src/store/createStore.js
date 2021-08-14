import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  store.runSaga = sagaMiddleware.run;
  store.runSaga(rootSaga);
  return { store };
};
