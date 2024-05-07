import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResumenrestaurantesPageRoutingModule } from './resumenrestaurantes-routing.module';

import { ResumenrestaurantesPage } from './resumenrestaurantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResumenrestaurantesPageRoutingModule
  ],
  declarations: [ResumenrestaurantesPage]
})
export class ResumenrestaurantesPageModule {}
