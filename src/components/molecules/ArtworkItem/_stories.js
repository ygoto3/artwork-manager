import React from 'react';

import { ArtworkItem } from './index';

module.exports = stories => (
  stories
  .addWithInfo(
    'normal',
    'An item to display an artwork',
    () => (
      <ArtworkItem title="Untitled" imageSource="http://lorempixel.com/200/200/" description="It is good and bad" />
    )
  )
);
