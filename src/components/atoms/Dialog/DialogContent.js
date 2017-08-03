// @flow

import React from 'react'; 

export type DialogContentProps = {
  title?: string;
  children: React$Element<any>;
}

export const DialogContent = ({ children, title }: DialogContentProps) => (
  <section>
    <h1>{title}</h1>
    {children}
  </section>
);

Object.assign(DialogContent, {
  displayName: 'DialogContent',
});
