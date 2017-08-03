// @flow

import React, { Component } from 'react';

import { ArtworkItem } from '../../molecules/ArtworkItem';
import { List, ListItem } from '../../atoms/List';

export type ArtworkListProps = {
  items: Artwork[];
};

export class ArtworkList extends Component<*,ArtworkListProps,*> {

  render() {
    const { items } = this.props;
    return (
      <List>
        {items.map(i => (
          <ListItem key={i.id}>
            <ArtworkItem {...i} />
          </ListItem>
        ))}
      </List>
    );
  }

}
