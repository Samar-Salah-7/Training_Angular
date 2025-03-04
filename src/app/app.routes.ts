import { Routes } from '@angular/router';
import { BodyComponent } from './Components/body/body.component';
import { MasterProductsComponent } from './Components/master-products/master-products.component';
import path from 'path';
import { ProductsDetailsComponent } from './Components/products-details/products-details.component';
import { ErrorPageComponent } from './Components/error-page/error-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    data: { showHeader: true },
  },
  {
    path: 'home',
    component: BodyComponent,
    data: { showHeader: true },
  },
  {
    path: 'products',
    component: MasterProductsComponent,
    data: { showHeader: true },
  },

  {
    //Dynamic Component
    path: 'products/:ID',
    component: ProductsDetailsComponent,
    data: { showHeader: true },
  },
  {
    path: '**',
    component: ErrorPageComponent,
    data: { showHeader: false },
  },
];
