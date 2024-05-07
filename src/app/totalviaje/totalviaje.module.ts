import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TotalviajePageRoutingModule } from './totalviaje-routing.module';

import { TotalviajePage } from './totalviaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TotalviajePageRoutingModule
  ],
  declarations: [TotalviajePage]
})
export class TotalviajePageModule {}
