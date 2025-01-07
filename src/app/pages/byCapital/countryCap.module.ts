import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CountryServiceRoutingModule } from './countryCap-routing.module';

import { countryCapPage } from './countryCappage';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountryServiceRoutingModule
  ],
  declarations: [countryCapPage] 
})
export class CountryServiceModule {}
