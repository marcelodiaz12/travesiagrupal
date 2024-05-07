import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlojamientosconofertasPageRoutingModule } from './alojamientosconofertas-routing.module';

import { AlojamientosconofertasPage } from './alojamientosconofertas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlojamientosconofertasPageRoutingModule
  ],
  declarations: [AlojamientosconofertasPage]
})
export class AlojamientosconofertasPageModule {}
