import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActividadesfavoritasPage } from './actividadesfavoritas.page';

const routes: Routes = [
  {
    path: '',
    component: ActividadesfavoritasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActividadesfavoritasPageRoutingModule {}
