// @flow

import { createStore, applyMiddleware } from 'redux';
import type { Store } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';

import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

interface CustomStore extends Store<*,*> {
  runSaga: Function;
  close: Function;
}

export default function (initialState: any): CustomStore {
  const store = (createStore(
    reducers,
    initialState,
    applyMiddleware(sagaMiddleware),
  ): any);

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  return (store: CustomStore);
}
