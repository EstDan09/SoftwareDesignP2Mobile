import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ByRegionPageRoutingModule } from './by-region-routing.module';

import { ByRegionPage } from './by-region.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ByRegionPageRoutingModule
  ],
  declarations: [ByRegionPage]
})
export class ByRegionPageModule {}
