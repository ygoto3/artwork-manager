// @flow

import React, { Component } from 'react';

import { ArtworkForm } from '../../molecules/ArtworkForm';

export type ArtworkCreateProps = {
  createArtwork: (artwork: Artwork) => void;
};

const validators = {
  title: (t) => t.value.length ? null : 'too short',
};

export class ArtworkCreate extends Component<*, ArtworkCreateProps, *> {

  onClickSubmit: Function;

  constructor() {
    super();
    this.onClickSubmit = this.onClickSubmit.bind(this);
  }

  render() {
    return (
      <ArtworkForm onClickSubmit={this.onClickSubmit}
                   validators={validators} />
    );
  }

  onClickSubmit(e: SyntheticEvent, artwork: Artwork) {
    this.props.createArtwork(artwork);
  }

}
