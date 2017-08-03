// @flow

import React, { Component } from 'react';

import { ListItem } from './ListItem';

import styles from './styles.css';

export type ListProps = {
  children: ListItem;
  className: string;
};

export class List extends Component<*, ListProps, *> {

  props: ListProps;
  
  render() {
    const { children, className, ...otherProps } = this.props;

    return (
      <ul className={`${styles.container} ${className}`}
          {...otherProps}>
        {children}
      </ul>
    );
  }

}

Object.assign(List, {
  defaultProps: {
    className: '',
  },
});

export { ListItem as ListItem };
