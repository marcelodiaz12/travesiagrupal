import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumenactividadesPage } from './resumenactividades.page';

const routes: Routes = [
  {
    path: '',
    component: ResumenactividadesPage
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumenactividadesPageRoutingModule {}
