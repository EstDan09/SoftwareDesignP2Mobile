import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'countryCap',
    loadChildren: () => import('./pages/byCapital/countryCap.module').then( m => m.CountryServiceModule)
  },
  {
  path: 'byName',
  loadChildren: () => import('./pages/by-name/by-name.module').then( m => m.ByNamePageModule)
  },
  {
    path: 'byRegion',
    loadChildren: () => import('./pages/by-region/by-region.module').then( m => m.ByRegionPageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./pages/favorites/favorites.module').then( m => m.FavoritosPageModule)
  },
  {
    path: 'country/:name',
    loadChildren: () => import('./pages/countryDetails/countryDetails.module').then( m => m.countryDetailsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'by-name',
    loadChildren: () => import('./pages/by-name/by-name.module').then( m => m.ByNamePageModule)
  },
  {
    path: 'by-region',
    loadChildren: () => import('./pages/by-region/by-region.module').then( m => m.ByRegionPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'callback',
    loadChildren: () => import('./pages/callback/callback.module').then( m => m.CallbackPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
