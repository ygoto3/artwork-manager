// @flow

import React, { Component } from 'react';

import styles from './styles.css';

export type FormProps = {
  children: React$Element<any>;
  validators: {[index: string]: Function};
};

export class Form extends Component<*,FormProps,*> {

  form: HTMLFormElement;

  render() {
    const { children } = this.props;
    return (
      <form action="" ref={c => this.form = c}>
        {children}
      </form>
    );
  }

  validate() {
    const { validators } = this.props;
    const { form } = this;

    const res = {};
    for (let key in validators) {
      const elem = form.elements.namedItem(key);
      res[key] = validators[key](elem, form);
      if (!res[key]) {
        elem.classList.remove(styles.invalid);
      } else {
        elem.classList.add(styles.invalid);
      }

    }
    return res;
  }

  data() {
    const { form } = this;
    return Object.keys(form.elements)
      .filter(key => isNaN(parseInt(key, 10)))
      .reduce((acc, key) => {
        const elem: HTMLInputElement = (form.elements.namedItem(key): any);
        if (elem.getAttribute('type') === 'file') {
          acc[key] = elem.files[0];
        } else {
          acc[key] = elem.value;
        }
        return acc;
      }, {});
  }

}
