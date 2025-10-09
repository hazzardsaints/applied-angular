import { Routes } from '@angular/router';
import { Links } from './links';
import { List } from './components/list';
import { Prefs } from './components/prefs';
import Demo from './pages/demo';
import { LinksApi } from './services/links-api';
import { Add } from './pages/add';
export const LINKS_ROUTES: Routes = [
  {
    path: '',
    component: Links,
    providers: [LinksApi],
    children: [
      {
        path: 'list',
        component: List,
      },
      {
        path: 'prefs',
        component: Prefs,
      },
      {
        path: 'demo',
        component: Demo,
      },
      {
        path: 'add',
        component: Add,
      },
    ],
  },
];
