import { configure, setAddon } from '@storybook/react';
import infoAddon, { setDefaults } from '@storybook/addon-info';
import '@storybook/addon-chapters';
import loadDirectories from 'storybook-directory-chapters';

const context = require.context('../src/components', true, /_stories.js$/);

function loadStories() {
  loadDirectories(context);
}

setDefaults({
  inline: true,
});
setAddon(infoAddon);

configure(loadStories, module);
