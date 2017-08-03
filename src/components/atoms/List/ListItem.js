// @flow

import React from 'react';

export type ListItemProps = {
  children: React$Element<any>;
};

export const ListItem = ({ children, ...otherProps }: ListItemProps) => {
  return (
    <li {...otherProps}>{children}</li>
  );
};

Object.assign(ListItem, {
  displayName: 'ListItem',
});
