// @flow
import morgan from 'morgan';
import bodyParser from 'body-parser';

import { allowCrossDomain } from './middlewares/cors';
import UsersRouter from './routers/UsersRouter';
import ArtworksRouter from './routers/ArtworksRouter';

export default class Api {

  app: express$Application;

  constructor(app: express$Application) {
    this.app = app;
    this.middleware();
    this.routes();
  }

  middleware(): void {
    this.app.use(morgan('dev'));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(allowCrossDomain);
  }

  routes(): void {
    const usesRouter = new UsersRouter();
    const artworksRouter = new ArtworksRouter();

    this.app.use(usesRouter.path, usesRouter.router);
    this.app.use(artworksRouter.path, artworksRouter.router);
  }

}
