// @flow

import { createReducer } from '../utils/data';

import {
  RECEIVE_ARTWORKS,
} from '../actions/artwork';

export default createReducer([], {
  [RECEIVE_ARTWORKS](state: Artwork[], action: ReceiveArtworksAction): Artwork[] {
    return state.concat(action.items);
  },
});
