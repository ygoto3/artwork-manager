// @flow

import express from 'express';
import debug from '../utils/debug';

const logger = debug('Router');

module.exports = class Router {

  router: express$Router; 

  path: string;

  constructor(path: string) {
    this.router = express.Router();
    this.path = path;
    this.init();
  }

  init(): void {
    logger('Router.init() should be overridden');
  }

};
