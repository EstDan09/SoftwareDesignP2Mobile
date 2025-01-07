import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; 

import { VisitadosPageRoutingModule } from './visitados-routing.module';
import { VisitadosPage } from './visitados.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    VisitadosPageRoutingModule
  ],
  declarations: [VisitadosPage]
})
export class VisitadosPageModule {}
