import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { countryDetailsPage } from './countryDetails.page';

const routes: Routes = [
  {
    path: '',
    component: countryDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class countryDetailsPageRoutingModule {}
