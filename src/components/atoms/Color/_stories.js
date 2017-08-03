import React from 'react';

import { Color } from './index';

module.exports = stories => (
  stories
  .add(
    'all',
    () => (
      <div>
        <Color primary />
        <Color secondary />
        <Color accent />
        <Color success />
        <Color danger />
        <Color warning />
        <Color info />
        <Color twitter />
        <Color facebook />
      </div>
    )
  )
);
