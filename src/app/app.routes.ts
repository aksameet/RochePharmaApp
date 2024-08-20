import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'feature1',
    loadComponent: () =>
      import('./components/feature1/feature1.component').then(
        (m) => m.Feature1Component
      ),
  },
  {
    path: 'feature2',
    loadComponent: () =>
      import('./components/feature2/feature2.component').then(
        (m) => m.Feature2Component
      ),
  },
  {
    path: '',
    redirectTo: 'feature1',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'feature1',
    pathMatch: 'full',
  },
];
