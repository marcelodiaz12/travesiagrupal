import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VueloPage } from './vuelo.page';

const routes: Routes = [
  {
    path: '',
    component: VueloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VueloPageRoutingModule {}
