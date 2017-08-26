import React from 'react';

import { MediaLayout } from './index';

module.exports = stories => (
  stories
  .add('normal', () => (
    <MediaLayout>
      <img src="http://lorempixel.com/200/200/" alt="alt" />
      <div>
        <p>Line 1</p>
        <p>Line 2</p>
      </div>
    </MediaLayout>
  ))
);
