// @flow

import React from 'react';

import { MediaLayout } from '../../atoms/MediaLayout';

export const ArtworkItem = (props: Artwork) => (
  <section>
    <h1>{props.title}</h1>
    <MediaLayout>
      <img src={props.imageSource} alt={props.title} />
      <p>{props.description}</p>
    </MediaLayout>
  </section>
);

Object.assign(ArtworkItem, {
  displayName: 'ArtworkItem',
});
