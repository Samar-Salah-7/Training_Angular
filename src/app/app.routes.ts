import { Routes } from '@angular/router';
import { BodyComponent } from './Components/body/body.component';
import { MasterProductsComponent } from './Components/master-products/master-products.component';
import path from 'path';
import { ProductsDetailsComponent } from './Components/products-details/products-details.component';
import { ErrorPageComponent } from './Components/error-page/error-page.component';
import { ShoppingComponent } from './Components/shopping/shopping.component';
import { TemplateDrivenFormComponent } from './Components/Forms/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './Components/Forms/reactive-form/reactive-form.component';

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
    path: 'shop',
    component: ShoppingComponent,
    data: { showHeader: true },
  },
  {
    path: 'add',
    component: TemplateDrivenFormComponent,
    data: { showHeader: true },
  },
  {
    path: 'reactive',
    component: ReactiveFormComponent,
    data: { showHeader: true },
  },
  {
    path: '**',
    component: ErrorPageComponent,
    data: { showHeader: false },
  },
];
