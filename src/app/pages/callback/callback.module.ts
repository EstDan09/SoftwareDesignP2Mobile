import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CallbackPageRoutingModule } from './callback-routing.module';
import { CallbackPage } from './callback.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CallbackPageRoutingModule,
    ComponentsModule,
    TranslateModule.forChild()
  ],
  declarations: [CallbackPage]
})
export class CallbackPageModule {}
