// @flow

import React, { Component } from 'react'; 

import { Button } from '../../atoms/Button';

export type DialogAction = {
  label: string;
  onClick: Function;
};

export type DialogActionsProps = {
  actions: DialogAction[];
  onClose: Function;
}

export class DialogActions extends Component<*, DialogActionsProps, *> {
  render() {
    const { actions, onClose } = this.props;
    return (
      <div>
        {actions.map((a, i) => (
          <Button key={i} onClick={a.onClick}>{a.label}</Button>
        ))}
        <Button onClick={onClose}>Close</Button>
      </div>
    );
  }
}

Object.assign(DialogActions, {
  defaultProps: {
    actions: []
  },
});
