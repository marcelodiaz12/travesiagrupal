import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestauranteseconomicosPageRoutingModule } from './restauranteseconomicos-routing.module';

import { RestauranteseconomicosPage } from './restauranteseconomicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestauranteseconomicosPageRoutingModule
  ],
  declarations: [RestauranteseconomicosPage]
})
export class RestauranteseconomicosPageModule {}
