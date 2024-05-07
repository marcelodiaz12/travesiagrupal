import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisamigosPageRoutingModule } from './misamigos-routing.module';

import { MisamigosPage } from './misamigos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisamigosPageRoutingModule
  ],
  declarations: [MisamigosPage]
})
export class MisamigosPageModule {}
