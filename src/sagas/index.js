// @flow

import { all } from 'redux-saga/effects';

import { fetchArtworksAsync } from './artwork';

export default function* root(): Generator<*,*,*> {
  yield all([
    fetchArtworksAsync(),
  ]);
}

