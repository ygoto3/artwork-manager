import React from 'react';
import { action } from '@storybook/addon-actions';

import {
  Dialog,
  DialogContent,
  DialogActions,
} from './index';

const actions = new Array(2).fill(null)
  .map((a, i) => ({ label: `action ${i}`, onClick: action(`clicked ${i}`) }));

module.exports = stories => (
  stories
  .addWithInfo(
    'open',
    () => {
      return (
      <Dialog open onClose={action('dialog closed')}>
        <DialogContent title="Dialog title">
          Dialog body
        </DialogContent>
        <DialogActions actions={actions} />
      </Dialog>
    ); }
  )
  .addWithInfo(
    'close',
    () => (
      <Dialog onClose={action('dialog closed')}>
        <DialogContent title="Dialog title">
          Dialog body
        </DialogContent>
        <DialogActions actions={actions} />
      </Dialog>
    )
  )
);
