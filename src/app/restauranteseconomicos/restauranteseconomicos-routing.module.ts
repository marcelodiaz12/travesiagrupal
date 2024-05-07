import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestauranteseconomicosPage } from './restauranteseconomicos.page';

const routes: Routes = [
  {
    path: '',
    component: RestauranteseconomicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestauranteseconomicosPageRoutingModule {}
