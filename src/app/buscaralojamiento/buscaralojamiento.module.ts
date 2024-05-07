import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscaralojamientoPageRoutingModule } from './buscaralojamiento-routing.module';

import { BuscaralojamientoPage } from './buscaralojamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscaralojamientoPageRoutingModule
  ],
  declarations: [BuscaralojamientoPage]
})
export class BuscaralojamientoPageModule {}
