import React from 'react';

import { Footer } from './index';

module.exports = stories => (
  stories
  .chapter('Footer')
  .addWithInfo(
    'normal',
    'Application\'s footer',
    () => (
      <Footer />
    )
  )
);
