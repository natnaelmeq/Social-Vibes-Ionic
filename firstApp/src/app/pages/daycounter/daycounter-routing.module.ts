import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaycounterPage } from './daycounter.page';

const routes: Routes = [
  {
    path: '',
    component: DaycounterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaycounterPageRoutingModule {}
