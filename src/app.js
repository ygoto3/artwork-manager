// @flow

import path from 'path';
import http from 'http';
import mongoose from 'mongoose';
import express from 'express';

import './utils/polyfills.js';
import debug from './server/utils/debug';
import environment from './server/config/environment';
import Api from './server/Api.js';
import Renderer from './server/Renderer.js';

const logger = debug('app');
const app = express();
const port = environment.PORT + environment.NODE_APP_INSTANCE;

new Api(app);
new Renderer(app, path.resolve(__dirname, 'static'), path.resolve(__dirname, 'static/service-worker.js'), path.resolve(__dirname, '../uploads'));
const server: Server = http.createServer(app);

function onListening(): void {
  logger(`Listening on ${port}`);
  mongoose.connect(environment.MONGODB_URI, {
    useMongoClient: true,
  });
}

server.listen(port);
server.on('listening', onListening);
