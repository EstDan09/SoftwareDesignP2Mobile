import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { countryDetailsPageRoutingModule } from './countryDetails-routing.module';

import { countryDetailsPage } from './countryDetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    countryDetailsPageRoutingModule
  ],
  declarations: [countryDetailsPage]
})
export class countryDetailsPageModule {}
