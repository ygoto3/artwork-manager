// @flow

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import './utils/polyfills.js';
import routes from './routes';
import configureStore from './store';
import sagas from './sagas';

const store = configureStore(window.__PRELOADED_STATE__);
store.runSaga(sagas);

render((
  <Provider store={store}>
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
