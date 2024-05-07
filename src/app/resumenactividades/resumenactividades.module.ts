import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResumenactividadesPageRoutingModule } from './resumenactividades-routing.module';

import { ResumenactividadesPage } from './resumenactividades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResumenactividadesPageRoutingModule
  ],
  declarations: [ResumenactividadesPage]
})
export class ResumenactividadesPageModule {}
