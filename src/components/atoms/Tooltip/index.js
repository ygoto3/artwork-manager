// @flow

import React, { Component } from 'react';

import styles from './styles.css';

export type TooltipProps = {
  className: string;
  children: React$Element<any>;
  label: string | React$Element<any>;
};

export class Tooltip extends Component<*, TooltipProps, *> {
  render() {
    const { className, children, label } = this.props;
    return (
      <span className={`${styles.container} ${className}`}>
        {children}
        <span className={styles.tooltip}>{label}</span>
      </span>
    );
  }
}

Object.assign(Tooltip, {
  displayName: 'Tooltip',
  defaultProps: {
    className: '',
  },
});
