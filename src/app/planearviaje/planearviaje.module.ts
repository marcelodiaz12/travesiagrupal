import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanearviajePageRoutingModule } from './planearviaje-routing.module';

import { PlanearviajePage } from './planearviaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanearviajePageRoutingModule
  ],
  declarations: [PlanearviajePage]
})
export class PlanearviajePageModule {}
