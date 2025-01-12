import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ByRegionPageRoutingModule } from './by-region-routing.module';

import { ByRegionPage } from './by-region.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ByRegionPageRoutingModule,
    ComponentsModule,
    TranslateModule.forChild()
  ],
  declarations: [ByRegionPage]
})
export class ByRegionPageModule {}
