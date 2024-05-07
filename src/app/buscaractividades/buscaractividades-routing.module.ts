import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscaractividadesPage } from './buscaractividades.page';

const routes: Routes = [
  {
    path: '',
    component: BuscaractividadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscaractividadesPageRoutingModule {}
