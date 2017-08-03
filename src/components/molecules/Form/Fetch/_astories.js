import React from 'react';

module.exports = stories => (
  stories
  .addWithInfo(
    'normal',
    'A button with a text label',
    () => (
      <p>Fetch</p>
    )
  )
);
