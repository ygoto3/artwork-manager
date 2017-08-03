// @flow

import React, { Component } from 'react';

import { ArtworkList } from '../../organisms/ArtworkList';

export type PortalProps = {
  fetchArtworks: Function;
  artworks: Artwork[];
};

export class Portal extends Component<*,PortalProps,*> {

  componentWillMount() {
    this.props.fetchArtworks();
  }

  render() {
    const { artworks } = this.props;
    return (
      <section>
        Portal
        <ArtworkList items={artworks} />
      </section>
    );
  }

}
