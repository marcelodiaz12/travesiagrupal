import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanearviajePage } from './planearviaje.page';

const routes: Routes = [
  {
    path: '',
    component: PlanearviajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanearviajePageRoutingModule {}
