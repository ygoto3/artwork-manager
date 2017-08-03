import React from 'react';

import { Avatar } from './index';

module.exports = stories => (
  ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']
  .reduce((s, size) => (
    s.addWithInfo(
      `size: ${size}`,
      () => (
        <Avatar {...{[size]: true}} src="https://placeimg.com/100/100/any" />
      )
    )
  ), stories)
);
