import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; 

import { FavoritosPageRoutingModule } from './favorites-routing.module';
import { FavoritesPage } from './favorites.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FavoritosPageRoutingModule
  ],
  declarations: [FavoritesPage]
})
export class FavoritosPageModule {}
