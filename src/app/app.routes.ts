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
  },
  {
    path: 'home',
    component: BodyComponent,
  },
  {
    path: 'products',
    component: MasterProductsComponent,
  },

  {
    //Dynamic Component
    path: 'products/:ID',
    component: ProductsDetailsComponent,
  },
  {
    path: '**',
    component: ErrorPageComponent,
  },
];
