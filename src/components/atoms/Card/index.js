// @flow

import React from 'react';

import styles from './styles.css';

export type CardProps = {
  children: React$Element<any>;
};

export const Card = ({ children, ...otherProps }: CardProps) => (
  <section className={styles.container} {...otherProps}>{children}</section>
);

Object.assign(Card, {
  displayName: 'Card',
});
