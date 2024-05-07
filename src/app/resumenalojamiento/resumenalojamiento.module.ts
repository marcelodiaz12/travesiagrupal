import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResumenalojamientoPageRoutingModule } from './resumenalojamiento-routing.module';

import { ResumenalojamientoPage } from './resumenalojamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResumenalojamientoPageRoutingModule
  ],
  declarations: [ResumenalojamientoPage]
})
export class ResumenalojamientoPageModule {}
