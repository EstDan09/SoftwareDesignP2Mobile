import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/CountryService'; 
import { Country } from '../models/country.interface'; 
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-countryCapPage',
  templateUrl: './countryCap.page.html',
  styleUrls: ['./countryCap.page.scss'],
})
export class countryCapPage implements OnInit {
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
        this.displayedCountries = [];
        return;
      }
      this.countryService.searchByCapital(this.searchTerm.trim()).subscribe(
        (countries) => {
          this.displayedCountries = countries;
        },
        (error) => {
          console.error('Error searching countries:', error);
        }
      );
    }
  
}

