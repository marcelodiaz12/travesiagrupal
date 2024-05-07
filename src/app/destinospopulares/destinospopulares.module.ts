import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DestinospopularesPageRoutingModule } from './destinospopulares-routing.module';

import { DestinospopularesPage } from './destinospopulares.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DestinospopularesPageRoutingModule
  ],
  declarations: [DestinospopularesPage]
})
export class DestinospopularesPageModule {}
