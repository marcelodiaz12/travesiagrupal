import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionardestinoPageRoutingModule } from './seleccionardestino-routing.module';

import { SeleccionardestinoPage } from './seleccionardestino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionardestinoPageRoutingModule
  ],
  declarations: [SeleccionardestinoPage]
})
export class SeleccionardestinoPageModule {}
