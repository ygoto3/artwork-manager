// @flow

import React from 'react';

export const ArtworkItem = (props: Artwork) => (
  <section>
    <h1>{props.title}</h1>
    <img src={props.imageSource} alt={props.title} />
    <p>{props.description}</p>
  </section>
);
