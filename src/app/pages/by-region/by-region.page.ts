import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/CountryService'; 
import { Country } from '../models/country.interface'; 
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.page.html',
  styleUrls: ['./by-region.page.scss'],
})
export class ByRegionPage implements OnInit {
  selectedRegion: string = '';
  countries: any[] = [];
  loading: boolean = false;
  
  constructor(private countryService: CountryService) {}
  ngOnInit() {
    this.onSearch();
  }


  onSearch() {
    if (this.selectedRegion) {
      this.loading = true;
      this.countryService.searchByRegion(this.selectedRegion).subscribe(
        (data: any[]) => {
          this.countries = data;
          this.loading = false;
        },
        error => {
          console.error(error);
          this.loading = false;
        }
      );
    }
  }
}