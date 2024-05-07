import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlojamientosconofertasPage } from './alojamientosconofertas.page';

const routes: Routes = [
  {
    path: '',
    component: AlojamientosconofertasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlojamientosconofertasPageRoutingModule {}
