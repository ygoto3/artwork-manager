// @flow

import env from '../../config/environment';

env.set({
  PORT: parseInt(process.env.PORT || 5000, 10),
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost/mydb',
  NODE_APP_INSTANCE: parseInt(process.env.NODE_APP_INSTANCE || 0, 10),
  API_ORIGIN: process.env.API_ORIGIN || 'http://localhost:5000',
});
