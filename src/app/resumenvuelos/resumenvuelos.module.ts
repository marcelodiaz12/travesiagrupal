import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResumenvuelosPageRoutingModule } from './resumenvuelos-routing.module';

import { ResumenvuelosPage } from './resumenvuelos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResumenvuelosPageRoutingModule
  ],
  declarations: [ResumenvuelosPage]
})
export class ResumenvuelosPageModule {}
