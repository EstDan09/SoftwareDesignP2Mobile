import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/CountryService'; 
import { Country } from '../models/country.interface'; 
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  public displayedCountries: Country[] = [];
  public searchTerm: string = '';

  constructor(
    private countryService: CountryService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.onSearch();
  }

    onSearch() {
    if (this.searchTerm.trim() === '') {
      //campo está vacío, mostrar todos los países
      this.countryService.searchByCapital('').subscribe(
        (countries) => {
          this.displayedCountries = countries;
        },
        (error) => {
          console.error('Error loading countries:', error);
        }
      );
    } else {
      this.countryService.searchByCapital(this.searchTerm).subscribe(
        (countries) => {
          this.displayedCountries = countries;
        },
        (error) => {
          console.error('Error searching countries:', error);
        }
      );
    }
  }
}

