// @flow

import React from 'react';

import styles from './styles.css';

export const MediaLayout = ({ children }) => (
  <div className={styles.container}>
    {children[0]}
    <div>
      {children[1]}
    </div>
  </div>
);

Object.assign(MediaLayout, {
  displayName: 'MediaLayout',
});
