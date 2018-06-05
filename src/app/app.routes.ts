import { RouterModule, Routes } from '@angular/router';

import {
  AboutComponent,
  ContactComponent,
  PortfolioComponent,
  ProductComponent
} from './components/index.paginas';

const app_routes: Routes = [
  { path: 'home', component:  PortfolioComponent},
  { path: 'about', component: AboutComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', pathMatch: 'full' , redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash: true });
