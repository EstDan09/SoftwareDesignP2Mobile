import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from 'src/app/services/CountryService';
import { FireBaseCnxService } from 'src/app/services/fire-base-cnx.service';

@Component({
  selector: 'app-countryDetails',
  templateUrl: './countryDetails.page.html',
  styleUrls: ['./countryDetails.page.scss'],
})
export class countryDetailsPage implements OnInit {
  countryName: string = '';
  details: any = {};
  code: string = "";

  constructor(private route: ActivatedRoute, private countryService: CountryService, private firebaseService: FireBaseCnxService) {}

  ngOnInit() {
    this.countryName = this.route.snapshot.paramMap.get('name') || '';
    if (this.countryName) {
      this.countryService.countryDetails(this.countryName).subscribe(
        (res) => {
          this.details = res;
        },
        (err) => {
          console.error('Error fetching country details:', err);
        }
      );
      this.countryService.searchByName(this.countryName).subscribe(
        (res) => {
          const country = res[0];
          if (country) {
            this.code = country.cca3;
          }
        },
        (err) => {
          console.error('Error fetching country code:', err);
        }
      )
    }
  }

  addToFavorites(countryCode: string) {
    this.countryService.addToFavorites(countryCode);

    // Firebase
    this.firebaseService.saveCountries(countryCode);
  }

  addToVisited(countryCode: string) {
    this.countryService.addToVisited(countryCode);
  }
}
