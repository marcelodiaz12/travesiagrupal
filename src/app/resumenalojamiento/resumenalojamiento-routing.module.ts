import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumenalojamientoPage } from './resumenalojamiento.page';

const routes: Routes = [

  {
    path: '',
    component: ResumenalojamientoPage
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumenalojamientoPageRoutingModule {}
