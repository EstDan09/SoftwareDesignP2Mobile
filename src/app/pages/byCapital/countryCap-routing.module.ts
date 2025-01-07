import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { countryCapPage } from './countryCappage';

const routes: Routes = [
  {
    path: '',
    component: countryCapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountryServiceRoutingModule {}
