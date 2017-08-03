import React from 'react';

import { Tooltip } from './index';

module.exports = stories => (
  stories
  .addWithInfo(
    'normal',
    () => (
      <Tooltip label="Tooltip">
        Hover me
      </Tooltip>
    )
  )
);
