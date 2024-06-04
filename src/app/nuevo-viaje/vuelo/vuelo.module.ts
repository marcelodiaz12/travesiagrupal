import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VueloPageRoutingModule } from './vuelo-routing.module';

import { VueloPage } from './vuelo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VueloPageRoutingModule
  ],
  declarations: [VueloPage]
})
export class VueloPageModule {}
