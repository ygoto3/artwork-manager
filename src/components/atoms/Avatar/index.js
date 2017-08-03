// @flow

import React from 'react';

import styles from './styles.css';

type SizeProps = {
  xxs?: boolean;
  xs?: boolean;
  s?: boolean;
  m?: boolean;
  l?: boolean;
  xl?: boolean;
  xxl?: boolean;
};

export type AvatarProps = SizeProps & {
  src: string;
};

function props2style(props: SizeProps) {
  return styles[
    ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']
      .reduce((acc, v) => props[v] ? v : acc, 'm')
  ]
}

export const Avatar = ({ src, xxs, xs, s, m, l, xl, xxl, ...otherProps }: AvatarProps) => (
  <img className={`${styles.container} ${props2style({ xxs, xs, s, m, l, xl, xxl })}`}
       src={src}
       {...otherProps} />
);

Object.assign(Avatar, {
  displayName: 'Avatar',
});
