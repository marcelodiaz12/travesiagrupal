import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumenvuelosPage } from './resumenvuelos.page';

const routes: Routes = [
  {
    path: '',
    component: ResumenvuelosPage
  }, 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumenvuelosPageRoutingModule {}
