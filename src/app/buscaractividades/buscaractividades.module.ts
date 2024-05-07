import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscaractividadesPageRoutingModule } from './buscaractividades-routing.module';

import { BuscaractividadesPage } from './buscaractividades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscaractividadesPageRoutingModule
  ],
  declarations: [BuscaractividadesPage]
})
export class BuscaractividadesPageModule {}
