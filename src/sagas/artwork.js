// @flow

import { call, put, takeEvery } from 'redux-saga/effects';

import env from '../config/environment';
import {
  receiveArtworks,
  FETCH_ARTWORKS,
  CREATE_ARTWORK,
} from '../actions/artwork';

const API_ORIGIN = env.get('API_ORIGIN');

export async function fetchArtworksApi(): Promise<Artwork[]> {
  const artworks = await fetch(`${API_ORIGIN}/api/v1/artworks`)
    .then(res => res.json());
  return artworks;
}

export async function createArtworkApi(artwork: Artwork): Promise<Artwork> {
  const formData = new FormData();
  formData.append('image', artwork.image);

  const image = await fetch(`${API_ORIGIN}/api/v1/artworks/images`, {
    method: 'post',
    body: formData,
  }).then(r => r.json());

  const body = JSON.stringify( Object.assign({}, artwork, { imageSource: image.filename }) );

  const item = await fetch(`${API_ORIGIN}/api/v1/artworks`, {
    method: 'post',
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
    body,
  }).then(r => r.json());

  return item;
}

export function* fetchArtworks(): Generator<*,*,*> {
  const artworks = yield call(fetchArtworksApi);
  yield put(receiveArtworks(artworks));
}

export function* createArtwork({ artwork }: { artwork: Artwork }): Generator<*,*,*> {
  const item = yield call(createArtworkApi, artwork);
  yield put(receiveArtworks([item]));
}

export function* fetchArtworksAsync(): Generator<*,*,*> {
  yield takeEvery(FETCH_ARTWORKS, fetchArtworks);
  yield takeEvery(CREATE_ARTWORK, createArtwork);
}

