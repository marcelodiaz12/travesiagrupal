import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumenrestaurantesPage } from './resumenrestaurantes.page';

const routes: Routes = [
  {
    path: '',
    component: ResumenrestaurantesPage
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumenrestaurantesPageRoutingModule {}
