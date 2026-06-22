import { Routes } from '@angular/router';
import { HomePage } from './features/home/pages/home-page/home-page';
import { DetailPage } from './features/home/pages/detail-page/detail-page';

export const routes: Routes =
[
  { path: '', component: HomePage },
  { path: 'details/:id', component: DetailPage },
];