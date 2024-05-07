import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscaralojamientoPage } from './buscaralojamiento.page';

const routes: Routes = [
  {
    path: '',
    component: BuscaralojamientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscaralojamientoPageRoutingModule {}
