import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CountryServiceRoutingModule } from './countryCap-routing.module';

import { countryCapPage } from './countryCappage';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountryServiceRoutingModule,
    ComponentsModule
  ],
  declarations: [countryCapPage] 
})
export class CountryServiceModule {}
