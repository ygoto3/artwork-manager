// @flow

import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from '../routes';
import configureStore from '../store';
import sagas from '../sagas';

export default class Renderer {
  
  app: express$Application;
  staticPath: string;
  serviceWorkerPath: string;
  uploadsPath: string;

  render: (req: $Request, res: $Response) => void;

  constructor(app: express$Application, staticPath: string, serviceWorkerPath: string, uploadsPath: string) {
    this.render = this.render.bind(this);

    this.app = app;
    this.staticPath = staticPath;
    this.serviceWorkerPath = serviceWorkerPath;
    this.uploadsPath = uploadsPath;
    this.middleware();
  }

  middleware(): void {
    this.app.use('/static', express.static(this.staticPath));
    this.app.use('/uploads', express.static(this.uploadsPath));
    this.app.use('/service-worker.js', express.static(this.serviceWorkerPath));
    this.app.use(this.render);
  }

  render(req: $Request, res: $Response): void {
    const store = configureStore();

    const component = (
      <Provider store={store}>
        <StaticRouter location={req.url} context={{}}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
    );

    store.runSaga(sagas).done.then(() => {
      const content = renderToString(component);
      res.send(this.renderFullPage(content, store.getState()));
    });

    renderToString(component);
    store.close();
  }

  renderFullPage(body: string, preloadedState: Object): string {
    return `
      <!doctype html>
      <title>Artwork Manager</title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <link rel="manifest" href="/static/manifest.json" />
      <link rel="icon" sizes="192x192" href="/static/images/icons/192x192.png" />
      <link rel="apple-touch-icon" href="/static/images/icons/180x180.png" />
      <link rel="stylesheet" href="/static/app.css" />
      <div id="root">${ body }</div>
      <script>
        window.addEventListener('load', () => {
          if (
            !('serviceWorker' in navigator) ||
            !(
              window.location.protocol === 'https:' ||
              window.location.hostname === 'localhost' ||
              window.location.hostname === '[::1]' ||
              window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
            )
          ) return;
          navigator.serviceWorker.register('/service-worker.js')
            .then(registration => console.log('serviceWorker registered'))
            .catch(err => console.log('serviceWorker failed to be registered', err));
        });
      </script>
      <script>
        // WARNING: See the following for security issues around embedding JSON in HTML:
        // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
      <script src="/static/client.js"></script>
    `;
  }

}
