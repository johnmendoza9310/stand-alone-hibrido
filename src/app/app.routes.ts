import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'pre-offer-list',
        loadChildren: () =>
          import('./modules/pre-offer-list/pre-offer-list.module').then(
            (m) => m.PreOfferListModule
          ),
      },

      {
        path: 'create-pre-offer',
        loadChildren: () =>
          import('./modules/create-pre-offer/create-pre-offer.module').then(
            (m) => m.CreatePreOfferModule
          ),
      },
      { path: '', redirectTo: '/pre-offer-list', pathMatch: 'full' },
      { path: '**', redirectTo: '/pre-offer-list' },
    ],
  },
];
