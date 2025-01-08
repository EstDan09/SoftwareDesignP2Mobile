import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ByNamePageRoutingModule } from './by-name-routing.module';

import { ByNamePage } from './by-name.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ByNamePageRoutingModule,
    ComponentsModule
  ],
  declarations: [ByNamePage]
})
export class ByNamePageModule {}
