import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'countryCap',
    pathMatch: 'full'
  },
  {
    path: 'countryCap',
    loadChildren: () => import('./pages/byCapital/countryCap.module').then( m => m.CountryServiceModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./pages/favorites/favorites.module').then( m => m.FavoritosPageModule)
  },
  {
    path: 'visitados',
    loadChildren: () => import('./pages/visitados/visitados.module').then( m => m.VisitadosPageModule)
  },
  {
    path: 'country/:name',
    loadChildren: () => import('./pages/countryDetails/countryDetails.module').then( m => m.countryDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
