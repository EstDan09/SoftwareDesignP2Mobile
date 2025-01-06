import { Component } from '@angular/core';
import { CountryService } from 'src/app/services/CountryService';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage {
  favorites: string[] = [];

  constructor(private countryService: CountryService) {
    this.favorites = this.countryService.getFavorites();
  }
}
