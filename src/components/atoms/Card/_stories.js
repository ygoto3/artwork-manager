import React from 'react';

import { Card } from './index';

module.exports = stories => (
  stories
  .addWithInfo(
    'normal',
    () => (
      <Card>Card content</Card>
    )
  )
);
