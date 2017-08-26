import React from 'react';

import { List, ListItem } from './index';

const items = [
  { text: 'AAA' },
  { text: 'BBB' },
  { text: 'CCC' },
];

module.exports = stories => (
  stories
  .add('normal', () => (
    <List>
      {items.map((i, idx) => (
        <ListItem key={idx}>
          {i.text}
        </ListItem>
      ))}
    </List>
  ))
);
