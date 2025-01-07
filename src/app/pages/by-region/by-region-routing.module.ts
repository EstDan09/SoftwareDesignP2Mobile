import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ByRegionPage } from './by-region.page';

const routes: Routes = [
  {
    path: '',
    component: ByRegionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ByRegionPageRoutingModule {}
