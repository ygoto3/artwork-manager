import React from 'react';

import { Card } from './index';

module.exports = stories => (
  stories
  .add(
    'normal',
    () => (
      <Card>Card content</Card>
    )
  )
);
