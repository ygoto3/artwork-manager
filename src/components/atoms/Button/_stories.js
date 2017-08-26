import React from 'react';
import { action } from '@storybook/addon-actions';

import {
  Button,
  PrimaryButton,
  SecondaryButton,
  DangerButton,
  InfoButton,
} from './index';

module.exports = stories => (
  stories
  .add(
    'size: xxs',
    () => (
      <Button xxs onClick={action('clicked')}>Button</Button>
    )
  )
  .add(
    'size: xs',
    () => (
      <Button xs onClick={action('clicked')}>Button</Button>
    )
  )
  .add(
    'size: s',
    () => (
      <Button s onClick={action('clicked')}>Button</Button>
    )
  )
  .add(
    'size: m',
    () => (
      <Button m onClick={action('clicked')}>Button</Button>
    )
  )
  .add(
    'size: l',
    () => (
      <Button l onClick={action('clicked')}>Button</Button>
    )
  )
  .add(
    'size: xl',
    () => (
      <Button xl onClick={action('clicked')}>Button</Button>
    )
  )
  .add(
    'size: xxl',
    () => (
      <Button xxl onClick={action('clicked')}>Button</Button>
    )
  )
  .chapter('PrimaryButton')
    .addWithInfo(
      'show its importance',
      'The most important button in the page',
      () => (
        <PrimaryButton onClick={action('clicked')}>Button</PrimaryButton>
      )
    )
    .endOfChapter()
  .chapter('SecondaryButton')
    .addWithInfo(
      'show its importance',
      'A button of less importance than a PrimaryButton but of more importance than other buttons',
      () => (
        <SecondaryButton onClick={action('clicked')}>Button</SecondaryButton>
      )
    )
    .endOfChapter()
  .chapter('DangerButton')
    .addWithInfo(
      'indicate danger',
      'A button indicating something dangerous happens to a user when clicking it',
      () => (
        <DangerButton onClick={action('clicked')}>Button</DangerButton>
      )
    )
    .endOfChapter()
  .chapter('InfoButton')
    .addWithInfo(
      'indicate danger',
      'A button indicating something dangerous happens to a user when clicking it',
      () => (
        <InfoButton onClick={action('clicked')}>Button</InfoButton>
      )
    )
    .endOfChapter()
);
