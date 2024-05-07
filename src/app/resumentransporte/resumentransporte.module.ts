import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResumentransportePageRoutingModule } from './resumentransporte-routing.module';

import { ResumentransportePage } from './resumentransporte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResumentransportePageRoutingModule
  ],
  declarations: [ResumentransportePage]
})
export class ResumentransportePageModule {}
