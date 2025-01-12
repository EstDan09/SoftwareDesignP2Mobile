import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { CountryService } from 'src/app/services/CountryService';
import { FireBaseCnxService } from 'src/app/services/fire-base-cnx.service';
import { Country } from '../models/country.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  public user: any = null;
  public favorites: Country[] = [];
  public isFavoritesOpen: boolean = false;

  constructor(private auth: AuthService, private countryService: CountryService, private firebaseService: FireBaseCnxService) { }

  ngOnInit() {
    this.auth.user$.subscribe(response => {
      if (response) {
        this.user = response;
      }
    });
    
    this.getFavorites();
  }

  deleteFavorites(code: string) {
    this.firebaseService.deleteCountries(code);
    this.updateFavorites();
  }

  getFavorites() {
    this.firebaseService.getCountries().then((res) => {
      for (const code of res) {
        this.countryService.searchByCode(code).subscribe((arr) => {
          if (arr.length > 0) {
            this.favorites.push(arr[0]);
          }
        });
      }
    });
  }

  toggleFavorites() {
    this.isFavoritesOpen = !this.isFavoritesOpen;
  }

  updateFavorites() {
    this.favorites = [];
    this.getFavorites();
  }

  logout() {
    this.auth.logout({ logoutParams: { returnTo: document.location.origin + "/about"} });
  }

}
