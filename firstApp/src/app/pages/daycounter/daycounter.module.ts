import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaycounterPageRoutingModule } from './daycounter-routing.module';

import { DaycounterPage } from './daycounter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaycounterPageRoutingModule
  ],
  declarations: [DaycounterPage]
})
export class DaycounterPageModule {}
