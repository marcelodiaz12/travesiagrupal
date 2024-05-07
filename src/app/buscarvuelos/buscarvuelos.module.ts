import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarvuelosPageRoutingModule } from './buscarvuelos-routing.module';

import { BuscarvuelosPage } from './buscarvuelos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarvuelosPageRoutingModule
  ],
  declarations: [BuscarvuelosPage]
})
export class BuscarvuelosPageModule {}
