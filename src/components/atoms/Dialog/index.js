// @flow

import React, { Component, cloneElement } from 'react'; 

export { DialogContent } from './DialogContent';
export { DialogActions } from './DialogActions';

export type DialogAction = {
  label: string;
  onClick: Function;
};

export type DialogProps = {
  children: React$Element<any>[];
  // actions: DialogAction[];
  onClose?: Function;
}

export class Dialog extends Component<*, DialogProps, *> {

  callRef() {
  }

  render() {
    const { children, onClose, ...otherProps } = this.props;

    const kids = children.map(c => {
      if (c.type.name !== 'DialogActions') return c;
      return cloneElement(c, {
        ref: this.callRef.bind(this),
        onClose
      });
    });

    return (
      <dialog {...otherProps}>
        {kids}
      </dialog>
    );
  }

}
