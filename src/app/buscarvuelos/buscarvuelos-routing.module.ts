import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarvuelosPage } from './buscarvuelos.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarvuelosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarvuelosPageRoutingModule {}
