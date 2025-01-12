import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { countryDetailsPageRoutingModule } from './countryDetails-routing.module';

import { countryDetailsPage } from './countryDetails.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    countryDetailsPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [countryDetailsPage]
})
export class countryDetailsPageModule {}
