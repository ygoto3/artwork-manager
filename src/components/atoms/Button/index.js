// @flow

import React from 'react';

import styles from './styles.css';

export type ButtonProps = {
  children: React$Element<any>;
  className?: string,
  onClick?: () => void;
  xxs?: boolean;
  xs?: boolean;
  s?: boolean;
  m?: boolean;
  l?: boolean;
  xl?: boolean;
  xxl?: boolean;
};

function props2style(props) {
  return styles[
    ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']
      .reduce((acc, v) => props[v] ? v : acc, 'm')
  ];
}

export const Button = ({ children, className = '', xxs, xs, s, m, l, xl, xxl, ...otherProps }: ButtonProps) => (
  <button className={`${styles.container} ${props2style({xxs, xs, s, m, l, xl, xxl })} ${className}`}
          {...otherProps}
          >{children}</button>
);

export const PrimaryButton = ({className = '', ...otherProps}: ButtonProps) => (
  <Button className={`${styles.primary} ${className}`} {...otherProps}></Button>
);

export const SecondaryButton = ({className = '', ...otherProps}: ButtonProps) => (
  <Button className={`${styles.secondary} ${className}`} {...otherProps}></Button>
);

export const DangerButton = ({className = '', ...otherProps}: ButtonProps) => (
  <Button className={`${styles.danger} ${className}`} {...otherProps}></Button>
);

export const InfoButton = ({className = '', ...otherProps}: ButtonProps) => (
  <Button className={`${styles.info} ${className}`} {...otherProps}></Button>
);

const obj = {
  Button,
  PrimaryButton,
  SecondaryButton,
  DangerButton,
  InfoButton,
};
for (let key in obj) {
  Object.assign(obj[key], {
    displayName: key,
    defaultProps: {
      className: '',
    },
  });
}

