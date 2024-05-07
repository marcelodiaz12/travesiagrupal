import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VuelosenofertaPageRoutingModule } from './vuelosenoferta-routing.module';

import { VuelosenofertaPage } from './vuelosenoferta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VuelosenofertaPageRoutingModule
  ],
  declarations: [VuelosenofertaPage]
})
export class VuelosenofertaPageModule {}
