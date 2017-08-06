// @flow

import env from '../../config/environment';

const { process } = window;

env.set({
  API_ORIGIN: process.env.API_ORIGIN,
});
