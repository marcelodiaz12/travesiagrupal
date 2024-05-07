import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificardisponibilidadPageRoutingModule } from './verificardisponibilidad-routing.module';

import { VerificardisponibilidadPage } from './verificardisponibilidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerificardisponibilidadPageRoutingModule
  ],
  declarations: [VerificardisponibilidadPage]
})
export class VerificardisponibilidadPageModule {}
