// @flow

import App from '../components/pages/App';
import Portal from '../components/pages/Portal';
import ArtworkCreate from '../components/pages/ArtworkCreate';
import Settings from '../components/pages/Settings';

export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Portal,
      },
      {
        path: '/artworks/create',
        exact: true,
        component: ArtworkCreate,
      },
      {
        path: '/settings',
        exact: true,
        component: Settings,
      },
    ]
  }
];
