import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../pages/landing/landing')
        .then(m => m.LandingComponent),
  },

  {
    path: 'component/:slug',
    loadComponent: () =>
      import('../pages/playground/playground')
        .then(m => m.PlaygroundComponent),
  },

  {
    path: 'doc/:slug',
    loadComponent: () =>
      import('../pages/documentation/documentation')
        .then(m => m.DocumentationComponent),
  },

  {
    path: 'contact',
    loadComponent: () =>
      import('../pages/contacts/contacts')
        .then(m => m.ContactsComponent),
  },

  {
    path: '**',
    loadComponent: () =>
      import('../pages/not-found/not-found')
        .then(m => m.NotFoundComponent),
  },
];
