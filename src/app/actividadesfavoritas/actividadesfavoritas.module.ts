import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActividadesfavoritasPageRoutingModule } from './actividadesfavoritas-routing.module';

import { ActividadesfavoritasPage } from './actividadesfavoritas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActividadesfavoritasPageRoutingModule
  ],
  declarations: [ActividadesfavoritasPage]
})
export class ActividadesfavoritasPageModule {}
