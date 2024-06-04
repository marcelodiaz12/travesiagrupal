import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoViajePage } from './nuevo-viaje.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoViajePage
  },
  {
    path: 'resumen',
    loadChildren: () => import('./resumen/resumen.module').then( m => m.ResumenPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoViajePageRoutingModule {}
