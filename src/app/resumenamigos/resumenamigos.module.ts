import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResumenamigosPageRoutingModule } from './resumenamigos-routing.module';

import { ResumenamigosPage } from './resumenamigos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResumenamigosPageRoutingModule
  ],
  declarations: [ResumenamigosPage]
})
export class ResumenamigosPageModule {}
