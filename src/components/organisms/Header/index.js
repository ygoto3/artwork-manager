// @flow

import React from 'react';

import { Navigation } from '../../molecules/Navigation';

import styles from './styles.css';

const navItems = [
  { label: 'TOP', path: '/' },
  { label: 'SETTINGS', path: '/settings' },
];

export const Header = () => (
  <header className={styles.container}>
    <Navigation items={navItems} />
  </header>
);

Object.assign(Header, {
  displayName: 'Header',
});
