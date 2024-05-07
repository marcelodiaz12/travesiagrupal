import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DestinospopularesPage } from './destinospopulares.page';

const routes: Routes = [
  {
    path: '',
    component: DestinospopularesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DestinospopularesPageRoutingModule {}
