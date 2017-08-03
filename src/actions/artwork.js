// @flow

export const SSR_ARTWORKS = '@ssr/artworks';
export const RECEIVE_ARTWORKS = '@action/RECEIVE_ARTWORKS';
export const FETCH_ARTWORKS = '@action/FETCH_ARTWORKS';
export const CREATE_ARTWORK = '@action/CREATE_ARTWORK';

export function receiveArtworks(items: Artwork[]): ReceiveArtworksAction {
  return {
    type: RECEIVE_ARTWORKS,
    items,
  };
}

export function fetchArtworks(items: Artwork[]): FetchArtworksAction {
  return {
    type: FETCH_ARTWORKS,
    items,
  };
}

export function createArtwork(artwork: Artwork): CreateArtworkAction {
  return {
    type: CREATE_ARTWORK,
    artwork,
  }
}
