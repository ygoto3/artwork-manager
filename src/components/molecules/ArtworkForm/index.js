// @flow

import React, { Component } from 'react';
import { Form } from '../Form';

export type ArtworkFormProps = {
  validators: {[index: string]: Function};
  onClickSubmit: Function;
};

export class ArtworkForm extends Component<*, ArtworkFormProps, *> {

  form: Form;
  onClickSubmit: Function;

  constructor() {
    super();
    this.onClickSubmit = this.onClickSubmit.bind(this);
  }
  
  render() {
    const { validators } = this.props;
    return (
      <Form ref={c => this.form = c} validators={validators}>
        <input type="text" name="title" />
        <input type="text" name="imageSource" />
        <input type="file" name="image" />
        <textarea id="" name="description" cols="30" rows="10"></textarea>
        <button type="submit" onClick={this.onClickSubmit}>Register</button>
      </Form>
    );
  }

  displayInvalidMessages() {
  }

  onClickSubmit(e: SyntheticEvent) {
    e.preventDefault();
    if (!this.props.onClickSubmit) return;

    const { form } = this;
    form.validate();
    const data = form.data();
    this.displayInvalidMessages();

    this.props.onClickSubmit(e, data);
  }

}
