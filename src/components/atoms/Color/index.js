// @flow

import React from 'react';

import styles from './styles.css';

export type ColorProps = {
  primary: string;
  secondary: string;
  accent: string;
  success: string;
  danger: string;
  warning: string;
  info: string;
  twitter: string;
  facebook: string;  
};

function props2type(props) {
  return [
    'primary',
    'secondary',
    'accent',
    'success',
    'danger',
    'warning',
    'info',
    'twitter',
    'facebook',
  ].reduce((acc, v) => props[v] ? v : acc, 'default');
}

export const Color = (props: ColorProps) => {
  const type = props2type(props);
  const cName = styles[type];
  return (
    <div className={`${styles.container} ${cName}`}>
      <p className={styles.label}>{type}</p>
    </div>
  );
};

Object.assign(Color, {
  displayName: 'Color'
});
