import React from 'react';
import { action } from '@storybook/addon-actions';

import { Form } from './index';

module.exports = stories => (
  stories
  .addWithInfo(
    'normal',
    'A button with a text label',
    () => (
      <Form>
        <input type="text" name="title" />
        <input type="text" name="imageSource" />
        <textarea id="" name="description" cols="30" rows="10"></textarea>
        <button type="button" onClick={action('submitted')}>Register</button>
      </Form>
    )
  )
);
