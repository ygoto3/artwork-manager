// @flow

import React from 'react';
import { Link } from 'react-router-dom';

export type NavagationItem = {
  label: string;
  path: string;
};

export const Navigation = ({ items }: { items: NavagationItem[] }) => (
  <ul>
    {items.map((i, idx) => (
      <li key={idx}>
        <Link to={i.path}>{i.label}</Link>
      </li>
    ))}
  </ul>
);

Object.assign(Navigation, {
  displayName: 'Navigation',
});
